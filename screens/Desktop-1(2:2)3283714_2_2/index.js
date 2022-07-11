import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e9d3eee-6296-4de1-8be8-deb08e44bfe1"
        }}
        style={styles.ImageBackground_2_3}
      />
      <View style={styles.View_2_4}>
        <Text style={styles.Text_2_4}>JkellResells</Text>
      </View>
      <View style={styles.View_2_5}>
        <Text style={styles.Text_2_5}>-Quality over quanity</Text>
      </View>
      <View style={styles.View_2_14}>
        <View style={styles.View_2_6} />
        <View style={styles.View_2_11}>
          <Text style={styles.Text_2_11}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16478570-f25d-42a6-bd02-79a2dc71f584"
          }}
          style={styles.ImageBackground_2_12}
        />
      </View>
      <View style={styles.View_2_20}>
        <Text style={styles.Text_2_20}>Contact:</Text>
      </View>
      <View style={styles.View_2_30}>
        <Text style={styles.Text_2_30}>Pricing:</Text>
      </View>
      <View style={styles.View_2_21}>
        <Text style={styles.Text_2_21}>What we offer:</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bfbe4f3-eaec-4109-b6bc-80356278a662"
        }}
        style={styles.ImageBackground_2_22}
      />
      <View style={styles.View_2_23} />
      <View style={styles.View_2_24} />
      <View style={styles.View_2_25} />
      <View style={styles.View_2_26} />
      <View style={styles.View_2_27} />
      <View style={styles.View_2_28} />
      <View style={styles.View_5_33} />
      <View style={styles.View_5_34} />
      <View style={styles.View_5_35} />
      <View style={styles.View_5_36} />
      <View style={styles.View_14_3} />
      <View style={styles.View_14_4} />
      <View style={styles.View_19_8}>
        <View style={styles.View_19_6} />
        <View style={styles.View_19_7} />
      </View>
      <View style={styles.View_19_9}>
        <View style={styles.View_19_10} />
        <View style={styles.View_19_11} />
      </View>
      <View style={styles.View_19_12}>
        <View style={styles.View_19_13} />
        <View style={styles.View_19_14} />
      </View>
      <View style={styles.View_19_15}>
        <View style={styles.View_19_16} />
        <View style={styles.View_19_17} />
      </View>
      <View style={styles.View_19_18}>
        <View style={styles.View_19_19} />
        <View style={styles.View_19_20} />
        <View style={styles.View_20_42}>
          <Text style={styles.Text_20_42}>Design/Branding</Text>
        </View>
      </View>
      <View style={styles.View_19_21}>
        <View style={styles.View_19_22} />
        <View style={styles.View_19_23} />
      </View>
      <View style={styles.View_19_27}>
        <View style={styles.View_19_28} />
        <View style={styles.View_19_29} />
      </View>
      <View style={styles.View_19_30}>
        <View style={styles.View_19_31} />
        <View style={styles.View_19_32} />
      </View>
      <View style={styles.View_19_33}>
        <View style={styles.View_19_34} />
        <View style={styles.View_19_35} />
      </View>
      <View style={styles.View_20_39}>
        <Text style={styles.Text_20_39}>Business Consulting</Text>
      </View>
      <View style={styles.View_20_40}>
        <Text style={styles.Text_20_40}>Marketing Strategies</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("391%") },
  ImageBackground_2_3: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  View_2_4: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_2_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_5: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_2_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_14: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%")
  },
  View_2_6: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_11: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_12: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_2_20: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("305%"),
    justifyContent: "flex-start"
  },
  Text_2_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_30: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("226%"),
    justifyContent: "flex-start"
  },
  Text_2_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_21: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("112%"),
    justifyContent: "flex-start"
  },
  Text_2_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_22: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("29%"),
    resizeMode: "cover"
  },
  View_2_23: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("130%"),
    backgroundColor: "rgba(75, 190, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_2_24: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("130%"),
    backgroundColor: "rgba(75, 190, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_2_25: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("130%"),
    backgroundColor: "rgba(75, 190, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_2_26: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("174%"),
    backgroundColor: "rgba(75, 190, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_2_27: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("174%"),
    backgroundColor: "rgba(75, 190, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_2_28: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("174%"),
    backgroundColor: "rgba(75, 190, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_5_33: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("239%"),
    backgroundColor: "rgba(167, 223, 255, 1)"
  },
  View_5_34: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("242%"),
    backgroundColor: "rgba(75, 190, 255, 1)"
  },
  View_5_35: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("242%"),
    backgroundColor: "rgba(75, 190, 255, 1)"
  },
  View_5_36: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("242%"),
    backgroundColor: "rgba(75, 190, 255, 1)"
  },
  View_14_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("376%"),
    backgroundColor: "rgba(71, 69, 69, 1)"
  },
  View_14_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("370%"),
    backgroundColor: "rgba(71, 69, 69, 1)"
  },
  View_19_8: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("130%")
  },
  View_19_6: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_19_7: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_9: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("130%")
  },
  View_19_10: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_19_11: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_12: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("130%")
  },
  View_19_13: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_19_14: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_15: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("174%")
  },
  View_19_16: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_19_17: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_18: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("174%")
  },
  View_19_19: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_19_20: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_20_42: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_20_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_21: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("174%")
  },
  View_19_22: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_19_23: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_27: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("242%")
  },
  View_19_28: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_29: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_30: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("242%")
  },
  View_19_31: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_32: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_33: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("242%")
  },
  View_19_34: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_19_35: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_20_39: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("135%"),
    justifyContent: "flex-start"
  },
  Text_20_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_40: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("135%"),
    justifyContent: "flex-start"
  },
  Text_20_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
