const About = prop => {
  const { image = "https://via.placeholder.com/215", about } = prop;
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};
export default About;
