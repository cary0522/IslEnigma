//@author :TerryXU
const bookHotel_model = require('../models/bookHotel_models');
const { get } = require('../routes/bookHotel_routes');

const bookHotel_controllers = {
  checkRoomAvailability: async (req,res)=>{
    try{
      const {hotelId} = req.body;
      const rooms = await bookHotel_model.get(hotelId);

    }
    catch(error){}
  },
  bookRoom: async (req,res)=>{
    try{}
    catch(error){}
  }
}
  