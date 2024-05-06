import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const MenuHamburguesas = () => {
  return (
    <View style={styles.menuHamburguesas}>
      <View style={styles.frame}>
        <Image
          style={[styles.frameIcon, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.header, styles.hamburguesaLayout]}>
          <View
            style={[styles.alignJustifySvgrepoCom1, styles.frame7Position]}
          />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={styles.losRevolucionarios}>LOS REVOLUCIONARIOS</Text>
          <View style={styles.headerChild} />
        </View>
      </View>
      <View style={[styles.frame1, styles.frameLayout4]}>
        <View style={[styles.frame2, styles.framePosition2]}>
          <View style={[styles.frame3, styles.framePosition2]}>
            <Image
              style={[
                styles.istockphoto6443781081024x102Icon,
                styles.framePosition2,
              ]}
              contentFit="cover"
              source={require("../assets/istockphoto6443781081024x1024-1.png")}
            />
            <Text
              style={[
                styles.hamburguesaRevolucionaria,
                styles.peperoniJamnYFlexBox,
              ]}
            >{`HAMBURGUESA
REVOLUCIONARIA`}</Text>
          </View>
        </View>
        <View style={[styles.frame4, styles.frameLayout3]}>
          <View style={[styles.frame5, styles.frameLayout3]}>
            <Text
              style={[styles.pizzaRevolucionaria, styles.hamburguesaTypo]}
            >{`Pizza revolucionaria                                        `}</Text>
            <View style={[styles.frame6, styles.frame6Layout]}>
              <Text style={[styles.peperoniJamnY, styles.frame6Layout]}>
                Peperoni, jamón y champiñones, mexicana y hawaiana
              </Text>
            </View>
            <View style={[styles.frame7, styles.frame7Layout]}>
              <Text
                style={[styles.hamburguesaRevolucionaria1, styles.frame7Layout]}
              >{`Hamburguesa revolucionaria `}</Text>
            </View>
            <View style={[styles.frame8, styles.frameLayout2]}>
              <Text style={[styles.carneDeArrachera, styles.carneTypo]}>
                Carne de arrachera, jamón, tocino, queso y papas
              </Text>
            </View>
            <View style={[styles.frame9, styles.frame9Position]}>
              <Text
                style={[styles.hamburguesaDePollo, styles.frame9Position]}
              >{`Hamburguesa de pollo                             `}</Text>
            </View>
            <View style={[styles.frame10, styles.frameLayout2]}>
              <Text style={[styles.carneDeArrachera1, styles.carneTypo]}>
                Carne de arrachera, jamón, tocino, queso y papas
              </Text>
            </View>
            <View style={[styles.frame11, styles.minsLayout1]}>
              <Text style={[styles.mins, styles.minsTypo]}>25 mins</Text>
            </View>
            <View style={[styles.frame12, styles.framePosition1]}>
              <Text style={[styles.mins1, styles.minsLayout]}>15 mins</Text>
            </View>
            <View style={[styles.frame13, styles.mins2Layout]}>
              <Text style={[styles.mins2, styles.mins2Layout]}>20 mins</Text>
            </View>
            <View style={[styles.frame14, styles.frameLayout1]}>
              <Text style={[styles.text, styles.textLayout]}>75$</Text>
            </View>
            <View style={[styles.frame15, styles.framePosition]}>
              <Text style={[styles.text1, styles.textLayout]}>75$</Text>
            </View>
            <View style={[styles.frame16, styles.framePosition]}>
              <Text style={[styles.text2, styles.textLayout]}>75$</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame17, styles.frameLayout4]}>
          <View style={[styles.homeIndicator, styles.homePosition]}>
            <View style={[styles.homeIndicator1, styles.homePosition]} />
          </View>
        </View>
        <View style={[styles.frame18, styles.frameLayout]}>
          <View style={[styles.frame19, styles.frameLayout]}>
            <Text
              style={[styles.hamburguesaDeJamn, styles.hamburguesaTypo]}
            >{`Hamburguesa de jamón                              `}</Text>
            <View style={[styles.frame19, styles.frameLayout]}>
              <Text style={[styles.carneDeArrachera2, styles.carneTypo]}>
                Carne de arrachera, jamón, tocino, queso y papas
              </Text>
            </View>
            <View style={[styles.frame21, styles.framePosition1]}>
              <Text style={[styles.mins3, styles.minsLayout]}>15 mins</Text>
            </View>
            <View style={[styles.frame22, styles.frameLayout1]}>
              <Text style={[styles.text, styles.textLayout]}>75$</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 391,
    position: "absolute",
    overflow: "hidden",
  },
  hamburguesaLayout: {
    height: 49,
    left: 0,
  },
  frame7Position: {
    left: 5,
    overflow: "hidden",
  },
  frameLayout4: {
    width: 394,
    overflow: "hidden",
  },
  framePosition2: {
    height: 191,
    top: 0,
    position: "absolute",
  },
  peperoniJamnYFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.smythe,
    left: 0,
  },
  frameLayout3: {
    height: 218,
    position: "absolute",
    overflow: "hidden",
  },
  hamburguesaTypo: {
    textAlign: "right",
    color: Color.colorGray_100,
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.smythe,
  },
  frame6Layout: {
    width: 321,
    position: "absolute",
  },
  frame7Layout: {
    width: 181,
    position: "absolute",
  },
  frameLayout2: {
    width: 320,
    top: 0,
  },
  carneTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.smythe,
    left: 0,
    position: "absolute",
  },
  frame9Position: {
    width: 145,
    left: 0,
    position: "absolute",
  },
  minsLayout1: {
    width: 71,
    position: "absolute",
  },
  minsTypo: {
    color: Color.colorGray_200,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.smythe,
    left: 0,
  },
  framePosition1: {
    width: 72,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  minsLayout: {
    height: 50,
    width: 72,
    color: Color.colorGray_200,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.smythe,
    left: 0,
    position: "absolute",
  },
  mins2Layout: {
    width: 70,
    position: "absolute",
  },
  frameLayout1: {
    height: 30,
    width: 35,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    height: 13,
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    width: 35,
    textAlign: "right",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.smythe,
    left: 0,
    position: "absolute",
  },
  framePosition: {
    width: 35,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 76,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    height: 44,
    left: 0,
    top: 0,
  },
  alignJustifySvgrepoCom1: {
    top: 8,
    width: 29,
    height: 33,
    position: "absolute",
  },
  vectorIcon: {
    height: "47.14%",
    width: "6.68%",
    top: "26.53%",
    right: "84.88%",
    bottom: "26.33%",
    left: "8.44%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  losRevolucionarios: {
    top: 5,
    left: 46,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.6,
    lineHeight: 42,
    width: 300,
    height: 31,
    textAlign: "center",
    fontFamily: FontFamily.smythe,
    color: Color.colorBlack,
    position: "absolute",
  },
  headerChild: {
    top: -8,
    left: 138,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  header: {
    top: 63,
    width: 391,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frame: {
    height: 112,
    width: 391,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  istockphoto6443781081024x102Icon: {
    left: 3,
    width: 370,
  },
  hamburguesaRevolucionaria: {
    color: Color.colorWhite,
    width: 189,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
    height: 112,
    top: 0,
    position: "absolute",
  },
  frame3: {
    width: 373,
    left: 0,
    overflow: "hidden",
  },
  frame2: {
    width: 394,
    overflow: "hidden",
    left: 0,
  },
  pizzaRevolucionaria: {
    left: 2,
    height: 48,
    width: 134,
    top: 0,
    position: "absolute",
  },
  peperoniJamnY: {
    top: 33,
    fontSize: 15,
    lineHeight: 23,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.smythe,
    left: 0,
    color: Color.colorBlack,
    width: 321,
  },
  frame6: {
    left: 20,
    height: 80,
    top: 0,
    overflow: "hidden",
  },
  hamburguesaRevolucionaria1: {
    top: 74,
    textAlign: "right",
    color: Color.colorGray_100,
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.smythe,
    height: 49,
    left: 0,
  },
  frame7: {
    height: 123,
    left: 5,
    overflow: "hidden",
    top: 0,
  },
  carneDeArrachera: {
    top: 104,
    height: 45,
  },
  frame8: {
    left: 12,
    height: 149,
    position: "absolute",
    overflow: "hidden",
  },
  hamburguesaDePollo: {
    top: 137,
    height: 51,
    textAlign: "right",
    color: Color.colorGray_100,
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.smythe,
  },
  frame9: {
    height: 188,
    top: 0,
    overflow: "hidden",
  },
  carneDeArrachera1: {
    top: 171,
    height: 47,
  },
  frame10: {
    left: 11,
    height: 218,
    position: "absolute",
    overflow: "hidden",
  },
  mins: {
    top: 18,
    height: 22,
    width: 71,
    position: "absolute",
  },
  frame11: {
    height: 40,
    left: 130,
    top: 0,
    overflow: "hidden",
  },
  mins1: {
    top: 146,
  },
  frame12: {
    height: 196,
    left: 130,
  },
  mins2: {
    top: 80,
    color: Color.colorGray_200,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.smythe,
    left: 0,
    height: 51,
  },
  frame13: {
    left: 172,
    height: 131,
    top: 0,
    overflow: "hidden",
  },
  text: {
    top: 17,
  },
  frame14: {
    left: 287,
  },
  text1: {
    top: 157,
  },
  frame15: {
    height: 170,
    left: 287,
  },
  text2: {
    top: 91,
  },
  frame16: {
    left: 288,
    height: 104,
  },
  frame5: {
    width: 341,
    left: 0,
    top: 0,
  },
  frame4: {
    top: 228,
    left: 9,
    width: 385,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: 100,
    backgroundColor: Color.colorBlack,
    height: 5,
    width: 134,
  },
  homeIndicator: {
    marginLeft: -197,
    bottom: 0,
    width: 375,
    height: 34,
  },
  frame17: {
    top: 664,
    height: 34,
    left: 0,
    position: "absolute",
  },
  hamburguesaDeJamn: {
    width: 143,
    height: 49,
    left: 0,
    top: 0,
    position: "absolute",
  },
  carneDeArrachera2: {
    top: 30,
    height: 46,
  },
  frame19: {
    width: 320,
    top: 0,
    left: 0,
  },
  mins3: {
    top: 6,
  },
  frame21: {
    left: 129,
    height: 56,
  },
  frame22: {
    left: 276,
  },
  frame18: {
    top: 449,
    left: 21,
    width: 373,
  },
  frame1: {
    top: 115,
    left: -3,
    height: 698,
    position: "absolute",
  },
  menuHamburguesas: {
    height: 812,
    overflow: "hidden",
    width: 370,
    backgroundColor: Color.colorWhite,
  },
});

export default MenuHamburguesas;
