import { Alert, Linking } from "react-native";
import Localize from "./Localize";
import Data from "./Data";

class LinkHelper {
  compose(email: string) {
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
      Data.jobApplication
    )}&body=${encodeURIComponent(Data.jobProposal)}`;

    Linking.canOpenURL(emailUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(emailUrl);
        } else {
          Alert.alert(Localize.error, Localize.somethingWentWrongWithEmail);
        }
      })
      .catch(() => {
        Alert.alert(Localize.error, Localize.somethingWentWrongWithEmail);
      });
  }

  dial(number: string) {
    const numberUrl = `tel:${number}`;
    Linking.canOpenURL(numberUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(numberUrl);
        } else {
          Alert.alert(Localize.error, Localize.somethingWentWrongWithDailer);
        }
      })
      .catch(() => {
        Alert.alert(Localize.error, Localize.somethingWentWrongWithDailer);
      });
  }
}

export default LinkHelper;
