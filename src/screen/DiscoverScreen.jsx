import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import theme from "../../assets/theme";
import { Star, Tag } from "lucide-react-native";

const { colors } = theme;

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* 🔥 HEADER */}
      <Text style={styles.header}>Discover</Text>

      {/* 🔥 PROMO */}
      <Text style={styles.sectionTitle}>🔥 Promo Hari Ini</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ ...styles.promoCard, marginLeft: 24 }}>
          <ImageBackground
            style={styles.promoImage}
            imageStyle={{ borderRadius: 15 }}
            source={{
              uri: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
            }}
          >
            <View style={styles.overlay}>
              <Text style={styles.promoTitle}>Diskon 20%</Text>
              <Text style={styles.promoText}>Servis Mesin</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ ...styles.promoCard, marginRight: 24 }}>
          <ImageBackground
            style={styles.promoImage}
            imageStyle={{ borderRadius: 15 }}
            source={{
              uri: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66",
            }}
          >
            <View style={styles.overlay}>
              <Text style={styles.promoTitle}>Cuci Gratis</Text>
              <Text style={styles.promoText}>Setelah Servis</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      {/* ⭐ BEST SERVICE */}
      <Text style={styles.sectionTitle}>⭐ Layanan Terbaik</Text>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
          }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Servis Mesin Lengkap</Text>
          <View style={styles.row}>
            <Star size={14} color={colors.accent()} />
            <Text style={styles.text}>4.9</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f",
          }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Ganti Oli Premium</Text>
          <View style={styles.row}>
            <Star size={14} color={colors.accent()} />
            <Text style={styles.text}>4.8</Text>
          </View>
        </View>
      </View>

      {/* 🆕 LAYANAN BARU */}
      <Text style={styles.sectionTitle}>🆕 Layanan Baru</Text>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9",
          }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Tambal Ban Express</Text>
          <View style={styles.row}>
            <Tag size={14} color={colors.primary()} />
            <Text style={styles.text}>Baru</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light(),
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 24,
    color: colors.dark(),
  },
  sectionTitle: {
    marginLeft: 24,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary(),
  },

  // PROMO
  promoCard: {
    width: 260,
    marginRight: 15,
  },
  promoImage: {
    height: 150,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
  },
  promoTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  promoText: {
    color: "#fff",
    fontSize: 12,
  },

  // CARD
  card: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.dark(),
  },
  text: {
    fontSize: 12,
    color: colors.textSecondary(),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});