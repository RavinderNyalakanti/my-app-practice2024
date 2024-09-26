// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './dash.css';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   // Dummy data for bookings
//   const [bookings, setBookings] = useState([
//     { id: 1, date: '2024-05-01', time: '10:00 AM', from: 'Chicago', destination: 'New York' },
//     { id: 2, date: '2024-05-05', time: '2:00 PM', from: 'Los Angeles', destination: 'San Francisco' },
//   ]);

//   // Dummy data for past bookings
//   const [pastBookings, setPastBookings] = useState([
//     { id: 3, date: '2024-04-20', from: 'San Francisco', destination: 'Chicago' },
//     { id: 4, date: '2024-04-25', from: 'New York', destination: 'Los Angeles' },
//   ]);

//   // Dummy data for user profile
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//   });

//   // Dummy data for payment methods
//   const [paymentMethods, setPaymentMethods] = useState([
//     { id: 1, type: 'Credit Card', number: '**** **** **** 1234' },
//     { id: 2, type: 'PayPal', number: 'john.doe@example.com' },
//   ]);

//   // State for the booking form
//   const [bookingForm, setBookingForm] = useState({
//     date: '',
//     time: '',
//     from: '',
//     destination: '',
//   });

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setBookingForm({ ...bookingForm, [name]: value });
//   };

//   const handleBookingSubmit = event => {
//     event.preventDefault();
//     // Create a new booking object
//     const newBooking = {
//       id: bookings.length + 1,
//       date: bookingForm.date,
//       time: bookingForm.time,
//       from: bookingForm.from,
//       destination: bookingForm.destination,
//     };
//     // Add the new booking to the list of bookings
//     setBookings([...bookings, newBooking]);
//     // Reset the booking form fields after submission
//     setBookingForm({ date: '', time: '', from: '', destination: '' });
//   };

//   // useEffect to mimic API calls (optional)
//   useEffect(() => {
//     // Simulate API calls if needed
//   }, []);

//   const handleLogout = () => {
//     // Perform logout logic
//     // eslint-disable-next-line no-undef
//     onLogout();
//   };

//   const handleDeleteBooking = id => {
//     // Filter out the booking with the provided id
//     const updatedBookings = bookings.filter(booking => booking.id !== id);
//     // Update the state with the filtered bookings
//     setBookings(updatedBookings);
//   };

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Welcome, {profile.name}</h1>
//         <button onClick={handleLogout}>Logout</button> 
//         <Link to='/'> 
//           <button>Return To Home</button>
//         </Link>
//       </header>

//       <section className="upcoming-bookings">
//         <h2>Upcoming Bookings</h2>
//         <ul> 
//           {bookings.map(booking => (
//             <li key={booking.id}>
//               <div>
//                 <span>Date: {booking.date}</span>
//                 <span>Time: {booking.time}</span>
//               </div>
//               <div>
//                 <span>From: {booking.from}</span> 
//                 <span>Destination: {booking.destination}</span> 
//                 <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="past-bookings">
//         <h2>Past Bookings</h2>
//         <ul>
//           {pastBookings.map(booking => (
//             <li key={booking.id}>
//               <div>
//                 <span>Date: {booking.date}</span>
//                 <span>From: {booking.from}</span>
//               </div>
//               <div>
//                 <span>Destination: {booking.destination}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="profile-settings">
//         <h2>Profile Settings</h2>
//         <div>
//           <p>Name: {profile.name}</p>
//           <p>Email: {profile.email}</p>
//         </div>
//       </section>

//       <section className="payment-methods">
//         <h2>Payment Methods</h2>
//         <ul>
//           {paymentMethods.map(method => (
//             <li key={method.id}>
//               <div>
//                 <span>Type: {method.type}</span>
//               </div>
//               <div>
//                 <span>Number: {method.number}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="booking-form">
//         <h2>Book a Trip</h2>
//         <form onSubmit={handleBookingSubmit}>
//           <div>
//             <label>Date:</label>
//             <input
//               type="date"
//               name="date"
//               value={bookingForm.date}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>Time:</label>
//             <input
//               type="time"
//               name="time"
//               value={bookingForm.time}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>From:</label>
//             <input
//               type="text"
//               name="from"
//               value={bookingForm.from}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>Destination:</label>
//             <input
//               type="text"
//               name="destination"
//               value={bookingForm.destination}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button type="submit">Book Now</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;
