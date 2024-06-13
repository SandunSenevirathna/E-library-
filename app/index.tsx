import { Text, View } from "react-native";
import GetStart from '../components/GetStart/GetStart';
import Login from '../components/Login/Login';
import SignUp from '../components/Sign Up/SignUp'


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GetStart/>
      {/* <Login/> */}
      {/* <SignUp/> */}
    </View>
  );
}
