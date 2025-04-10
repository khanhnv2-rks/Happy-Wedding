const GoogleMap = () => {
    return (
      <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '12px' }}
          loading="lazy"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.3361965230602!2d105.6177217986369!3d21.056674870927626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345714b7e42cbd%3A0x4c6c910c83671cbd!2zTmjDoCBUaOG7nSBC4bq_biBUaMO0bg!5e0!3m2!1svi!2s!4v1744192877818!5m2!1svi!2s`}
        />
      </div>
    );
  };
  
  export default GoogleMap;
  