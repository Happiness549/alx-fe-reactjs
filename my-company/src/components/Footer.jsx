function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '1rem 0',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      fontSize: '0.9rem',
    }}>
      © {new Date().getFullYear()} Your Company Name. All rights reserved.
    </footer>
  );
}

export default Footer;
