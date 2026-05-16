import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import theme from "../../assets/theme";
import { Clock, Star, Bookmark } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const { colors } = theme;

export default function ListBlog({
  styles,
  category,
  onBookmark,
}) {

  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: "Servis Mesin Lengkap",
      category: "Servis",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
      time: "60 menit",
      price: "Rp 120.000",
      rating: "4.8",
    },
    {
      id: 2,
      title: "Ganti Oli Motor",
      category: "Oli",
      image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f",
      time: "15 menit",
      price: "Rp 90.000",
      rating: "4.7",
    },
    {
      id: 3,
      title: "Tambal Ban",
      category: "Ban",
      image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9",
      time: "10 menit",
      price: "Rp 50.000",
      rating: "4.6",
    },
    {
      id: 4,
      title: "Ganti Aki",
      category: "Aki",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      time: "20 menit",
      price: "Rp 150.000",
      rating: "4.7",
    },
    {
      id: 5,
      title: "Cuci Motor",
      category: "Cuci",
      image: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66",
      time: "30 menit",
      price: "Rp 80.000",
      rating: "4.9",
    },
  ];

  const filteredData = data.filter(
    (item) => item.category === category
  );

  return (
    <ScrollView>

      <Text
        style={{
          marginLeft: 24,
          marginBottom: 10,
          color: colors.primary(),
        }}
      >
        Kategori: {category}
      </Text>

      <View style={styles.listBlog}>

        {/* HORIZONTAL */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 15 }}
        >

          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: data[0].image }}
            >
              <View style={itemHorizontal.overlay}>
                <Text style={itemHorizontal.cardTitle}>
                  Promo Servis Motor
                </Text>

                <Text style={itemHorizontal.cardText}>
                  Diskon hingga 20%
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: data[1].image }}
            >
              <View style={itemHorizontal.overlay}>
                <Text style={itemHorizontal.cardTitle}>
                  Servis Cepat
                </Text>

                <Text style={itemHorizontal.cardText}>
                  Hemat waktu & biaya
                </Text>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>

        {/* LIST */}
        <View style={itemVertical.listCard}>

          {filteredData.length === 0 ? (
            <Text>Tidak ada layanan</Text>
          ) : (
            filteredData.map((item) => (

              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate("Detail", { item })
                }
              >

                <View style={itemVertical.cardItem}>

                  <Image
                    style={itemVertical.cardImage}
                    source={{ uri: item.image }}
                  />

                  <View style={itemVertical.cardContent}>

                    <Text style={itemVertical.cardCategory}>
                      {item.category}
                    </Text>

                    <Text style={itemVertical.cardTitle}>
                      {item.title}
                    </Text>

                    <Text style={itemVertical.price}>
                      {item.price}
                    </Text>

                    <View style={itemVertical.infoRow}>

                      <Clock
                        size={12}
                        color={colors.textSecondary()}
                      />

                      <Text style={itemVertical.cardText}>
                        {item.time}
                      </Text>

                      <Star
                        size={12}
                        color={colors.accent()}
                      />

                      <Text style={itemVertical.cardText}>
                        {item.rating}
                      </Text>

                    </View>
                  </View>

                  <TouchableOpacity
                    style={itemVertical.bookmarkBtn}
                    onPress={() => onBookmark(item)}
                  >
                    <Bookmark
                      size={20}
                      color={colors.primary()}
                    />
                  </TouchableOpacity>

                </View>

              </TouchableOpacity>
            ))
          )}
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
    borderRadius: 12,
    elevation: 3,
    padding: 5,
    alignItems: "center",
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
    fontWeight: "600",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.dark(),
  },

  price: {
    fontSize: 13,
    color: colors.primary(),
    fontWeight: "bold",
  },

  cardText: {
    fontSize: 12,
    color: colors.textSecondary(),
  },

  infoRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },

  bookmarkBtn: {
    padding: 10,
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
    backgroundColor: "rgba(0,0,0,0.35)",
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