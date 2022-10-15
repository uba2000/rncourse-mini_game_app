import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function Card({ children, title, titleStyle }) {
  return (
    <View style={styles.inputContainer}>
      {title && (
        <Text style={[styles.instructionText, titleStyle]}>{title}</Text>
      )}
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
