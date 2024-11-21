const Header = (props: { text: string }) => {
  const { text } = props;
  return (
      <h1>{text}</h1>
  );
}

export default Header;