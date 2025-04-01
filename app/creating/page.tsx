export default function CreatingPagePage() {


    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>作ってるよ！</h1>
      </div>
    );
  }
  
  const styles = {
    container: {
      fontFamily: 'sans-serif',
      textAlign: 'center' as const,
      padding: '50px',
      backgroundColor: '#f8f8f8',
    },
    heading: {
      fontSize: '2em',
    }
  };
  