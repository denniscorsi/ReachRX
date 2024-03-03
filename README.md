#### Run Instructions

- Add a file named `.env` into the root directory and put into it `MONGO_URI=` followed by the string sent to you via email.
- Install dependencies with `npm install`
- Build the project with `npm run build`
- Start the app locally with `npm start`
- The server is on port 3002, so open a browser and go to http://localhost:3002/

---

#### Analysis

##### Database

A document-based database seemed best given that the data is non-relational and all belongs to the "Doctor" object. A document model also works well here because we can store arrays of timeslots when the doctors are available and booked. I chose MongoDB along with the Mongoose library to enforce a schema. One thing to note is that the code does not yet update the database when a timeslot is selected, so on refresh all timeslots become available again. An important next step would be to move the timeslot object from the "availableTimes" array to the "bookings" array upon booking. This will also require checking that another user hasn't booked that slot since the page was loaded.

##### React Router

A single-page application allows for a smooth user experience with limited fetch requests. I used react-router to switch between the grid view of all doctors and the page view of a single selected doctor. One downside here is the buggy behavior of the back button or a manual refresh, and I still need to build the code to ensure those actions work as expected.

##### MaterialUI

I chose to use a component library as the basic building blocks of the app. MaterialUI offers a variety of clean, well-designed components without much setup. However, it does significantly increase the dependency size and is a bit inflexible with fine-tuned customization.

##### Testing

Even with such a small app, a lot more testing needs to be built. I set up a few front-end tests to ensure the initial page loads properly. My next priority with tests would be making sure the doctors load to the home page within a couple of seconds. I also started writing server tests with supertest. However, I currently have this test file excluded from testing because it will require some additional jest configuration to work properly.

---

#### Clarifying questions for further development

- How long should each time slot be?
- Does there need to be a buffer between scheduled time slots? Does a doctor want to meet only one rep per day despite having multiple options?
- Is an appointment confirmed once the rep books it, or does the doctor want the ability to first approve the request?

---

#### Possible next steps

- Make responsive on mobile and in small windows
- Add a custom 404 page
- Add a filter feature to filter by location and availability
- Add email address to doctor data and send an email to the doctor when a time has been booked
- Format times to be in AM/PM instead of military time
- Implement lazy loading for when the number of doctors grows

---
