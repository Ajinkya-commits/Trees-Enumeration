const About = () => {
  return (
    <div className="min-h-screen p-6 mt-[100px]">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">
          We are a team focused on leveraging image analytics for tree
          enumeration.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          To create accurate methods for tree counting using innovative
          technologies.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Chirag Patil - Lead</li>
          <li>Gaurav Patil - DSA BOY, Model Trainer</li>
          <li>Ajinkya Thoke - Frontend</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
