//@author: 許哲誠
const { PrismaClient } = require('@prisma/client');
const passwordHelpers = require('../utils/passwordHelpers');
const prisma = new PrismaClient();


const register_Model = {
    create: async (memberData) => {
        try {
            console.log(memberData)
            const hashedPassword = await passwordHelpers.hash(memberData.password)
            const name = memberData.first_name + memberData.last_name
            const newMember = await prisma.member.create({
                data: {
                    name,
                    address: memberData.address,
                    phone: memberData.phone_number,
                    birth: new Date (memberData.birth_date),
                    account: memberData.account,
                    password: hashedPassword,
                },
            })
            // const newMember = await prisma.member.create({
            //     data: {
            //         name: "范怒怒",
            //         address: "台中",
            //         phone: "0912345678",
            //         birth: "2024-08-29T00:00:00.000Z", // 直接作為字串傳入
            //         account: "123@mail.com",
            //         password: hashedPassword
            //     }
            // });
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