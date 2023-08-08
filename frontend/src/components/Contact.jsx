const Contact = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    try {
        const response = await fetch('https://alexandrunitulescu-backend.onrender.com/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                form_email: email,
                form_subject: subject,
                form_message: message,
            }),
        });

        const responseData = await response.json();

        if (response.status === 200) {
            alert('Message sent successfully!');
        } else {
            alert(`Failed to send the message. ${responseData.message}`);
        }
    } catch (error) {
        alert('There was an error sending your message.');
    }
  };

  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-16 md:px-8 sm:px-4">
        <h3 className="text-xl font-bold tracking-tight text-blue-500 uppercase mb-4">Contact</h3>
        <div className="border-t-2 border-gray-200"></div>
      </div>
      <div className="max-w-7xl p-8 mx-auto lg:flex lg:items-start lg:justify-between px-4 lg:px-16 md:px-8 sm:px-4 mt-16">
        <div className="lg:w-1/2">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Don't be shy and contact me if curious.
          </h2>
          <p className="mb-8 lg:mb-16 text-gray-200 sm:text-xl">
            If you have any questions, feedback, or just want to get in touch, feel free to use the contact form. I'll be happy to hear from you!
          </p>
        </div>
        <form onSubmit={handleFormSubmit} className=" bg-white lg:w-1/2 space-y-8 border-2 border-gray-200 rounded-lg p-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-800">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800">
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className="shadow-sm bg-blue-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-blue-600">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
