import { VideoView, useVideoPlayer } from "expo-video";
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const player = useVideoPlayer(
    require("../../assets/Video/apimidiparis.mp4"),
    (player) => {
      player.loop = true;   
      player.play();       
    }
  );

return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sobre mí</Text>

        <View style={styles.card}>
            <Text style={styles.label}> Ariana Guadalupe Rosales Villalobos</Text> 

            <Text>
                <Text style={styles.label} > Matrícula:</Text>
                <Text style={styles.text} > A01644773</Text>
            
            </Text>
        </View>

        <View style={styles.card}>
        <Text style={styles.subtitle}>Descripción:</Text>
        <Text style={styles.text}>
          Soy estudiante de ingeniería en tecnologías computacionales, me
          apasionan mucho las computadoras y todo lo que se puede hacer dentro
          de ellas. Tengo especial interés por la ciberseguridad y la ciencia de
          datos, pero quisiera ver esta última más a fondo ya que siento que
          debo agudizar mi análisis matemático.
        </Text>
      </View>

      {/* Tarjeta de hobbies */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Mis hobbies:</Text>
        <Text style={styles.bullet}>• Lectura de libros clásicos o antiguos</Text>
        <Text style={styles.bullet}>
          • Cocinar postres (me encantan los dulces)
        </Text>
        <Text style={styles.bullet}>• Urban sketching ocasional</Text>
        <Text style={styles.bullet}>• Coleccionar cosas pequeñas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Dato curioso</Text>
        <Text style={styles.text}>
          Me gusta mucho la moda alternativa, en especial la moda lolita gótica,
          así como la música rock y visual kei. Aprovechó para recomendar la canción Apres midi (Por la tarde) de una banda japonesa de 1992.
        </Text>
        <Text style={styles.text}>
          Track: {" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://youtu.be/UuS0VrkMxW8?si=VoLA5stlPqx8zh5k")
            }
          >
            Apres Midi (Malice Mizer, 1995)
          </Text>
        </Text>
      </View>


      <VideoView
      style={styles.video}
        player={player}              
        allowsFullscreen
        allowsPictureInPicture
      />



    </ScrollView>


);
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },

  subtitle:{
    fontSize: 20,
    fontWeight: "600",
    marginBottom:10,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontWeight: "bold",
  },
  text:{
    fontWeight: "medium"
  },
  value: {
    marginBottom: 10,
  },

  bullet:{
    fontSize: 16,
    marginBottom: 6,
    lineHeight: 22,

  },

  link:{
    color: "blue",
    textDecorationLine: "underline",

  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  footer: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  },
  video:{
    width: "100%",
    marginTop: 20,
    aspectRatio: 9/16

  },
});

