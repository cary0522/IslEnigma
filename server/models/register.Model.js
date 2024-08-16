//@author: 許哲誠
const { PrismaClient } = require('@prisma/client');
const passwordHelpers = require('../utils/passwordHelpers');
const prisma = new PrismaClient();

const register_Model = {
    create: async (memberData) => {
        try {
            const hashedPassword = await passwordHelpers.hash(memberData.password)
            const name = memberData.first_name + memberData.last_name
            const newMember = await prisma.member.create({
                data: {
                    name,
                    address: memberData.address,
                    phone: memberData.phone_number,
                    birth: new Date(memberData.birth_date),
                    account: memberData.account,
                    password: hashedPassword,
                },
            })
            return true
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    read: async (member_account) => {
        try {
            const member = await prisma.member.findUnique({
                where: {
                    account: member_account,
                },
            });
            return member;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};

module.exports = register_Model;