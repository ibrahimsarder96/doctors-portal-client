import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({date, treatment, setTreatment}) => {
  const {_id,name, slots} = treatment;

  const handleBooking = event =>{
    event.preventDefault()
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    console.log(_id, name, slot, name)
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
          <label for="booking-modal" class="btn btn-accent btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
            <input type="text" readOnly value={format(date, 'PP')} class="input input-bordered w-full max-w-xs border-accent text-accent text-lg"/>
            <select name="slot" class="select select-bordered w-full max-w-xs text-accent border-accent">
              {
                slots.map(slot =><option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name="name" placeholder="Your name" class="input input-bordered w-full max-w-xs border-accent text-accent text-lg"/>
            <input type="email" name="email" placeholder="Email address" class="input input-bordered w-full max-w-xs border-accent text-accent text-lg"/>
            <input type="text" name="phone" placeholder="Phone" class="input input-bordered w-full max-w-xs border-accent text-accent text-lg"/>
            <input type="submit" value="Submit" class="bg-secondary rounded-md w-full max-w-xs border-accent text-accent text-lg cursor-pointer"/>
            </form>
          </div>
        </div>
    </div>
  );
};

export default BookingModal;