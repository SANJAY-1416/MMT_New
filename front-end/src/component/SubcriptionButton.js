import React, { useState } from "react";

function SubscriptionButton({ initialSubscribed }) {
  const [subscribed, setSubscribed] = useState(initialSubscribed);

  const toggleSubscription = () => {
    setSubscribed(!subscribed);
    // You would also update the backend here, e.g., via an API call
  };

  return (
    <div>
      <button onClick={toggleSubscription}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
}

export default SubscriptionButton;
