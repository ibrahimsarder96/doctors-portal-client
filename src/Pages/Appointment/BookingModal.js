import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({date, treatment, setTreatment}) => {
  const {_id,name, slots} = treatment;
  const [user, loading] = useAuthState(auth);

  const handleBooking = event =>{
    event.preventDefault()
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    console.log(_id, name, slot, name)
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <label for="booking-modal" className="btn btn-accent btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
            <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs border-accent text-accent text-lg"/>
            <select name="slot" className="select select-bordered w-full max-w-xs text-accent border-accent">
              {
                slots.map((slot, index )=><option
                  key={index} 
                  value={slot}
                  >{slot}</option>)
              }
            </select>
            <input type="text" name="name" readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs border-accent text-accent text-lg"/>
            <input type="email" name="email" readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs border-accent text-accent  text-lg"/>
            <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-xs border-accent text-accent text-lg"/>
            <input type="submit" value="Submit" className="bg-secondary rounded-md w-full max-w-xs border-accent text-accent text-lg cursor-pointer"/>
            </form>
          </div>
        </div>
    </div>
  );
};

export default BookingModal;