import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <View style={styles.landingPage3}>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <View style={styles.items}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={styles.men}>Menú</Text>
          </View>
          <Text style={[styles.eventos, styles.eventosTypo]}>Eventos</Text>
          <Text style={[styles.eventos, styles.eventosTypo]}>Nosotros</Text>
          <Text style={[styles.eventos, styles.eventosTypo]}>Ubicacion</Text>
        </View>
        <Text style={[styles.losRevolucionarios, styles.dividerPosition]}>
          Los Revolucionarios
        </Text>
      </View>
      <Image
        style={[styles.landingPage3Child, styles.dividerPosition]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={styles.landingPage3Item} />
      <Image
        style={[styles.landingPage3Inner, styles.landingPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View style={[styles.rectangleView, styles.landingChildPosition4]} />
      <Text style={[styles.men1, styles.menFlexBox2]}>TACOS</Text>
      <Image
        style={[styles.rectangleIcon, styles.landingChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <View style={[styles.landingPage3Child1, styles.landingChildLayout2]} />
      <Text style={[styles.men2, styles.menFlexBox2]}>ESPECIALIDADES</Text>
      <Image
        style={[styles.landingPage3Child2, styles.landingChildPosition3]}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      />
      <View style={[styles.landingPage3Child3, styles.landingChildPosition3]} />
      <Text style={[styles.men3, styles.menFlexBox2]}>A LA PARRILLA</Text>
      <Image
        style={[styles.landingPage3Child4, styles.landingChildPosition2]}
        contentFit="cover"
        source={require("../assets/rectangle-35.png")}
      />
      <View style={[styles.landingPage3Child5, styles.landingChildPosition1]} />
      <Text style={[styles.men4, styles.menFlexBox1]}>MARISCOS</Text>
      <Image
        style={[styles.landingPage3Child6, styles.landingChildPosition2]}
        contentFit="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <View style={[styles.landingPage3Child7, styles.landingChildPosition1]} />
      <Text style={[styles.men5, styles.menFlexBox1]}>HAMBURGUESAS</Text>
      <Image
        style={[styles.landingPage3Child8, styles.landingChildPosition2]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <View style={[styles.landingPage3Child9, styles.landingChildPosition1]} />
      <Text style={[styles.men6, styles.menFlexBox1]}>ENSALADAS</Text>
      <Image
        style={[styles.landingPage3Child10, styles.landingChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <View style={[styles.landingPage3Child11, styles.landingChildLayout]} />
      <Text style={[styles.men7, styles.menFlexBox]}>BOTANAS</Text>
      <Image
        style={[styles.landingPage3Child12, styles.landingChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <View style={[styles.landingPage3Child13, styles.landingChildLayout]} />
      <Text style={[styles.men8, styles.menFlexBox]}>BEBIDAS</Text>
      <Image
        style={[styles.landingPage3Child14, styles.landingChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-45.png")}
      />
      <View style={[styles.landingPage3Child15, styles.landingChildPosition]} />
      <Text style={[styles.men9, styles.menFlexBox]}>COCTELES</Text>
      <View style={[styles.navigationFooter, styles.navigationPosition]}>
        <View
          style={[styles.navigationFooterChild, styles.navigationPosition]}
        />
        <View style={[styles.items1, styles.itemsPosition]}>
          <Text style={styles.horario10002200FlexBox}>{`Horario
10:00-22:00`}</Text>
        </View>
        <View style={[styles.divider, styles.dividerPosition]} />
        <View style={[styles.items2, styles.buttonFlexBox]}>
          <Text style={styles.textTypo}>Contacto</Text>
          <Text style={[styles.text, styles.textTypo]}>+52 443 232 43</Text>
        </View>
        <View style={[styles.items3, styles.itemsPosition]}>
          <Text style={styles.horario10002200FlexBox}>Ubicación:</Text>
          <Text
            style={[styles.avenidaTorreonNuevo, styles.horario10002200FlexBox]}
          >
            Avenida Torreon Nuevo #519, Colonia Vicente Rivapalacio, Morelia
            58116 México.
          </Text>
        </View>
        <View style={[styles.items4, styles.itemsFlexBox]}>
          <Text style={styles.horario10002200FlexBox}>Facebook</Text>
          <Image
            style={styles.facebookIcon}
            contentFit="cover"
            source={require("../assets/facebook.png")}
          />
        </View>
        <View style={[styles.items5, styles.itemsFlexBox]}>
          <Text style={styles.horario10002200FlexBox}>Instagram</Text>
          <Image
            style={styles.facebookIcon}
            contentFit="cover"
            source={require("../assets/instagram.png")}
          />
        </View>
        <Image
          style={[styles.capturaDePantalla20240420Icon, styles.dividerPosition]}
          contentFit="cover"
          source={require("../assets/captura-de-pantalla-20240420-193154removebg-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationPosition: {
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  eventosTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.smythe,
  },
  dividerPosition: {
    left: 80,
    position: "absolute",
  },
  landingPosition: {
    height: 289,
    top: 190,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    position: "absolute",
  },
  landingChildPosition4: {
    height: 65,
    backgroundColor: Color.colorGray_300,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    top: 479,
    position: "absolute",
  },
  menFlexBox2: {
    height: 36,
    display: "flex",
    textAlign: "center",
    top: 494,
    color: Color.colorWhite,
    fontFamily: FontFamily.smythe,
    lineHeight: 45,
    fontSize: FontSize.size_11xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  landingChildLayout2: {
    width: 296,
    left: 572,
  },
  landingChildPosition3: {
    left: 943,
    width: 297,
  },
  landingChildPosition2: {
    top: 603,
    height: 289,
    position: "absolute",
  },
  landingChildPosition1: {
    height: 64,
    top: 892,
    backgroundColor: Color.colorGray_300,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    position: "absolute",
  },
  menFlexBox1: {
    height: 37,
    top: 904,
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.smythe,
    lineHeight: 45,
    fontSize: FontSize.size_11xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  landingChildLayout1: {
    height: 290,
    top: 1013,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  landingChildLayout: {
    height: 63,
    top: 1303,
    backgroundColor: Color.colorGray_300,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
  },
  menFlexBox: {
    top: 1316,
    height: 37,
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.smythe,
    lineHeight: 45,
    fontSize: FontSize.size_11xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  landingChildPosition: {
    left: 946,
    width: 294,
    position: "absolute",
  },
  itemsPosition: {
    width: 142,
    top: 34,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    alignSelf: "stretch",
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.smythe,
  },
  horario10002200FlexBox: {
    width: 226,
    display: "flex",
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.smythe,
    justifyContent: "center",
    alignItems: "center",
  },
  itemsFlexBox: {
    width: 184,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  men: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.smythe,
    lineHeight: 45,
    fontSize: FontSize.size_11xl,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    backgroundColor: Color.colorBlack,
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  eventos: {
    marginLeft: 48,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
  },
  items: {
    top: 56,
    right: 80,
    width: 618,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  losRevolucionarios: {
    top: 33,
    fontSize: 65,
    lineHeight: 98,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.smythe,
  },
  navigation: {
    height: 164,
    right: 0,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  landingPage3Child: {
    top: 164,
    maxHeight: "100%",
    width: 1280,
  },
  landingPage3Item: {
    top: 1330,
    left: 433,
    backgroundColor: "#d9d9d9",
    width: 19,
    height: 15,
    position: "absolute",
  },
  landingPage3Inner: {
    width: 294,
    left: 200,
  },
  rectangleView: {
    width: 294,
    left: 200,
  },
  men1: {
    left: 304,
    width: 90,
  },
  rectangleIcon: {
    height: 289,
    top: 190,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    position: "absolute",
  },
  landingPage3Child1: {
    height: 65,
    backgroundColor: Color.colorGray_300,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    top: 479,
    position: "absolute",
  },
  men2: {
    left: 603,
    width: 233,
  },
  landingPage3Child2: {
    width: 297,
    height: 289,
    top: 190,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    position: "absolute",
  },
  landingPage3Child3: {
    width: 297,
    height: 65,
    backgroundColor: Color.colorGray_300,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    top: 479,
    position: "absolute",
  },
  men3: {
    left: 991,
    width: 203,
  },
  landingPage3Child4: {
    width: 294,
    left: 200,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    top: 603,
  },
  landingPage3Child5: {
    width: 294,
    left: 200,
  },
  men4: {
    left: 274,
    width: 145,
  },
  landingPage3Child6: {
    width: 296,
    left: 572,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    top: 603,
  },
  landingPage3Child7: {
    width: 296,
    left: 572,
  },
  men5: {
    left: 605,
    width: 230,
  },
  landingPage3Child8: {
    width: 297,
    left: 943,
  },
  landingPage3Child9: {
    width: 297,
    left: 943,
  },
  men6: {
    left: 1010,
    width: 164,
  },
  landingPage3Child10: {
    width: 297,
    left: 200,
    position: "absolute",
  },
  landingPage3Child11: {
    width: 297,
    left: 200,
    position: "absolute",
  },
  men7: {
    left: 283,
    width: 129,
  },
  landingPage3Child12: {
    width: 296,
    left: 572,
    position: "absolute",
  },
  landingPage3Child13: {
    width: 296,
    left: 572,
    position: "absolute",
  },
  men8: {
    left: 661,
    width: 118,
  },
  landingPage3Child14: {
    height: 290,
    top: 1013,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  landingPage3Child15: {
    height: 63,
    top: 1303,
    backgroundColor: Color.colorGray_300,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
  },
  men9: {
    left: 1021,
    width: 143,
  },
  navigationFooterChild: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    width: 1440,
    height: 267,
    top: 0,
  },
  items1: {
    right: 453,
  },
  divider: {
    top: 1,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 1281,
    height: 1,
  },
  text: {
    marginTop: 8,
  },
  items2: {
    right: 840,
    top: 34,
    width: 145,
    position: "absolute",
  },
  avenidaTorreonNuevo: {
    marginTop: 8,
  },
  items3: {
    right: 656,
  },
  facebookIcon: {
    width: 45,
    height: 39,
    marginTop: 8,
  },
  items4: {
    right: 269,
    top: 34,
  },
  items5: {
    top: 36,
    right: 115,
  },
  capturaDePantalla20240420Icon: {
    top: 5,
    width: 246,
    height: 254,
  },
  navigationFooter: {
    top: 1391,
    height: 264,
    right: 0,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  landingPage3: {
    flex: 1,
    width: "100%",
    height: 1655,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
});

export default LandingPage;
