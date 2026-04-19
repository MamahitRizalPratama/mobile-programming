import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import theme from "../../assets/theme";
import { Wrench, Clock, Star } from "lucide-react-native";

const { colors } = theme;

export default function ListBlog({ styles }) {
  return (
    <ScrollView>

      {/* === HORIZONTAL (PROMO / LAYANAN UTAMA) === */}
      <View style={styles.listBlog}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 15 }}
        >
          {/* CARD 1 */}
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
              }}
            >
              <View style={itemHorizontal.overlay}>
                <Text style={itemHorizontal.cardTitle}>
                  Servis Motor Panggilan
                </Text>
                <Text style={itemHorizontal.cardText}>
                  Mekanik datang ke rumah
                </Text>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 2 */}
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
              }}
            >
              <View style={itemHorizontal.overlay}>
                <Text style={itemHorizontal.cardTitle}>
                  Ganti Oli Cepat
                </Text>
                <Text style={itemHorizontal.cardText}>
                  Proses hanya 15 menit
                </Text>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 3 */}
          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66",
              }}
            >
              <View style={itemHorizontal.overlay}>
                <Text style={itemHorizontal.cardTitle}>
                  Cuci Motor Premium
                </Text>
                <Text style={itemHorizontal.cardText}>
                  Bersih seperti baru
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>

        {/* === VERTICAL LIST === */}
        <View style={itemVertical.listCard}>

          {/* ITEM 1 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc" }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={itemVertical.cardCategory}>Servis</Text>
              <Text style={itemVertical.cardTitle}>Servis Mesin Lengkap</Text>

              <View style={itemVertical.infoRow}>
                <Clock size={12} color={colors.textSecondary()} />
                <Text style={itemVertical.cardText}>60 menit</Text>
                <Star size={12} color={colors.accent()} />
                <Text style={itemVertical.cardText}>4.8</Text>
              </View>
            </View>
          </View>

          {/* ITEM 2 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f" }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={itemVertical.cardCategory}>Oli</Text>
              <Text style={itemVertical.cardTitle}>Ganti Oli Motor</Text>

              <View style={itemVertical.infoRow}>
                <Clock size={12} color={colors.textSecondary()} />
                <Text style={itemVertical.cardText}>15 menit</Text>
                <Star size={12} color={colors.accent()} />
                <Text style={itemVertical.cardText}>4.7</Text>
              </View>
            </View>
          </View>

          {/* ITEM 3 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9" }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={itemVertical.cardCategory}>Ban</Text>
              <Text style={itemVertical.cardTitle}>Tambal Ban</Text>

              <View style={itemVertical.infoRow}>
                <Clock size={12} color={colors.textSecondary()} />
                <Text style={itemVertical.cardText}>10 menit</Text>
                <Star size={12} color={colors.accent()} />
                <Text style={itemVertical.cardText}>4.6</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    gap: 15,
  },
  cardItem: {
    flexDirection: "row",
    backgroundColor: colors.light(),
    borderRadius: 10,
    elevation: 2,
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  cardCategory: {
    fontSize: 12,
    color: colors.primary(),
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.dark(),
  },
  cardText: {
    fontSize: 12,
    color: colors.textSecondary(),
  },
  infoRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 260,
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardText: {
    color: "#fff",
    fontSize: 12,
  },
});