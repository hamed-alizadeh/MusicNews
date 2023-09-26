import React, { useState } from "react";


function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      title: "Event 1",
      description: "Description of Event 1",
      imageSrc: "./src/World Music.png",
    },
    {
      id: 2,
      title: "Event 2",
      description: "Description of Event 2",
      imageSrc: "event2.jpg",
    },
    {
      id: 3,
      title: "Event 3",
      description: "Description of Event 3",
      imageSrc: "event3.jpg",
    },
    {
        id: 4,
        title: "Event 4",
        description: "Description of Event 1",
        imageSrc: "event1.jpg",
      },
      {
        id: 5,
        title: "Event 5",
        description: "Description of Event 2",
        imageSrc: "event2.jpg",
      },
      {
        id: 6,
        title: "Event 6",
        description: "Description of Event 6",
        imageSrc: "event6.jpg",
      },
    // Add more events as needed
  ];

  const displayEvents = events.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < events.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="upcoming-events">
      <h2>Up Coming Events</h2>
      <div className="event-container">
        <div className="events-wrapper" style={{ transform: `translateX(${-currentIndex }%)` }}>
          {displayEvents.map((event) => (
            <div className="event" key={event.id}>
              <div className="event-image">
                <img src={event.imageSrc} alt={event.title} />
              </div>
              <div className="event-description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex + 3 >= events.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UpcomingEvents;
