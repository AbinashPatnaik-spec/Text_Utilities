import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <Navbar title=" txtUtils" />
    <Alert alert={alert} />
    <Text shAl={showAlert} />
    </>
  );
}

export default App;
