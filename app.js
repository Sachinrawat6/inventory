// app.js
 const datas =[
    {
      style: "24045",
      name: "Green silk kafan",
      color: "Green",
      MRP: "3,695.00"
    },
    {
      style: "24044",
      name: "Royal blue silk kafan",
      color: "Royal Blue",
      MRP: "3,695.00"
    },
    {
      style: "24043",
      name: "Black crepe silk Kimono dress with sequins",
      color: "Black",
      MRP: "4,495.00"
    },
    {
      style: "24042",
      name: "Navy french crepe Brocadr notch collar shirt",
      color: "Navy",
      MRP: "4,495.00"
    },
    {
      style: "24041",
      name: "Black silk v-neck kaftan with Brocade yoke",
      color: "Black",
      MRP: "5,195.00"
    },
    {
      style: "24040",
      name: "Red crepe silk brocade yoke dress",
      color: "Red",
      MRP: "6,995.00"
    },
    {
      style: "24039",
      name: "Purple  Maxi Dress with brocade yoke",
      color: "Purple",
      MRP: "6,195.00"
    },
    {
      style: "24038",
      name: "Purple party dress with brocade yoke",
      color: "Purple",
      MRP: "6,095.00"
    },
    {
      style: "24037",
      name: "Purple georgette kaftan shirt with brocade",
      color: "Purple",
      MRP: "4,595.00"
    },
    {
      style: "24036",
      name: "Black silk Kimono dress with brocade",
      color: "Black",
      MRP: "4,695.00"
    },
    {
      style: "24035",
      name: "Red crepe silk Kimono dress with sequins",
      color: "Red",
      MRP: "4,795.00"
    },
    {
      style: "24034",
      name: "Red silk Kimono dress with brocade",
      color: "Red",
      MRP: "5,095.00"
    },
    {
      style: "24033",
      name: "Royal Blue silk Kimono dress with brocade",
      color: "Royal Blue",
      MRP: "5,195.00"
    },
    {
      style: "24032",
      name: "Burgundy shimmery georgette with brocade border shrug.",
      color: "Burgundy",
      MRP: "6,995.00"
    },
    {
      style: "24031",
      name: "Saffron  & Orange silk Kimono oversize dress",
      color: "Orange",
      MRP: "4,095.00"
    },
    {
      style: "24030",
      name: "Orange  & saffron silk Kimono oversize dress",
      color: "Orange",
      MRP: "4,095.00"
    },
    {
      style: "24029",
      name: "Fuchia pink silk Kimono dress with brocade",
      color: "Fuchia Pink",
      MRP: "4,395.00"
    },
    {
      style: "24028",
      name: "Fuchia pink & orange silk colorblock Kimono dress",
      color: "Fuchia Pink",
      MRP: "4,095.00"
    },
    {
      style: "24027",
      name: "Yellow silk crepe embelished V-Neck kaftan",
      color: "Yellow",
      MRP: "4,295.00"
    },
    {
      style: "24026",
      name: "Hot pink brocade yoke party dress",
      color: "Pink",
      MRP: "6,595.00"
    },
    {
      style: "24025",
      name: "Yellow solid silk crepe pants",
      color: "Yellow",
      MRP: "3,595.00"
    },
    {
      style: "24024",
      name: "Pista Green V-Neck silk kaftan with brocade yoke",
      color: "Pista Green",
      MRP: "5,895.00"
    },
    {
      style: "24023",
      name: "Lime green & turquoise colorblock silk Kimono oversize dress",
      color: "Lime Green",
      MRP: "3,695.00"
    },
    {
      style: "24022",
      name: "Turquoise Green & Lime colorblock silk Kimono oversize dress",
      color: "Green",
      MRP: "3,695.00"
    },
    {
      style: "24021",
      name: "Green & Royal Blue colorblock silk Kimono oversize dress",
      color: "Green",
      MRP: "3,695.00"
    },
    {
      style: "24020",
      name: "Royal Blue & Green colorblock silk Kimono oversize dress",
      color: "Royal Blue",
      MRP: "3,795.00"
    },
    {
      style: "24019",
      name: "Black silk A-line party dress",
      color: "Black",
      MRP: "5,195.00"
    },
    {
      style: "24018",
      name: "Orange silk A-line party dress",
      color: "Orange",
      MRP: "4,995.00"
    },
    {
      style: "24017",
      name: "Navy brocade french crepe Festive shrug.",
      color: "Navy",
      MRP: "3,795.00"
    },
    {
      style: "24016",
      name: "Lime green silk kaftan",
      color: "Lime Green",
      MRP: "6,395.00"
    },
    {
      style: "24015",
      name: "Burgundy Silk with Brocade yoke Party Dress",
      color: "Burgundy",
      MRP: "6,695.00"
    },
    {
      style: "24014",
      name: "Navy georgette & brocade embelished party dress",
      color: "Navy",
      MRP: "4,795.00"
    },
    {
      style: "24013",
      name: "Yellow silk embelished festive party dress",
      color: "Yellow",
      MRP: "6,995.00"
    },
    {
      style: "24012",
      name: "Yellow silk V-neck long kaftan with contrast red border",
      color: "Yellow",
      MRP: "4,795.00"
    },
    {
      style: "24011",
      name: "Teal silk V-neck long kaftan with contrast green border",
      color: "Teal",
      MRP: "4,795.00"
    },
    {
      style: "24010",
      name: "Green Silk Trousers with Elastic waistband",
      color: "Green",
      MRP: "4,095.00"
    },
    {
      style: "24009",
      name: "Green crepe silk embelished festive shirt",
      color: "Green",
      MRP: "4,295.00"
    },
    {
      style: "24008",
      name: "Red Silk Trousers with Elastic waistband",
      color: "Red",
      MRP: "4,095.00"
    },
    {
      style: "24007",
      name: "Red crepe silk embelished festive shirt",
      color: "Red",
      MRP: "4,295.00"
    },
    {
      style: "24006",
      name: "Black Silk V-Neck brocade kaftan",
      color: "Black",
      MRP: "7,395.00"
    },
    {
      style: "24005",
      name: "Red Crepe Silk  Brocade Collar Shrug",
      color: "Red",
      MRP: "6,795.00"
    },
    {
      style: "24004",
      name: "Navy french crepe  silk kaftan with Brocade Yoke",
      color: "Navy",
      MRP: "5,395.00"
    },
    {
      style: "24003",
      name: "Red Crepe Silk kaftan with Brocade Yoke",
      color: "Red",
      MRP: "6,395.00"
    },
    {
      style: "24002",
      name: "Red Crepe Silk kaftan with Brocade Yoke",
      color: "Red",
      MRP: "7,995.00"
    },
    {
      style: "24001",
      name: "Red crepe silk v-neck kaftan with Brocade yoke",
      color: "Red",
      MRP: "7,995.00"
    },
    {
      style: "24000",
      name: "Royal blue silk  kaftan with brocade yoke",
      color: "Royal Blue",
      MRP: "7,095.00"
    },
    {
      style: "18069",
      name: "Rust floral print dress with a faux wrap-around dress.",
      color: "Rust",
      MRP: "3,395.00"
    },
    {
      style: "18068",
      name: "Beige and pink floral print half-placket mandarin collar shirt",
      color: "Beige",
      MRP: "3,895.00"
    },
    {
      style: "18067",
      name: "Green animal print kaftan dress with tassels",
      color: "Green",
      MRP: "2,495.00"
    },
    {
      style: "18066",
      name: "white & wine big polka dot moss crepe V-neck dress.",
      color: "White",
      MRP: "2,195.00"
    },
    {
      style: "18065",
      name: "Blue and white tie dye Kaftan dress",
      color: "Blue",
      MRP: "2,295.00"
    },
    {
      style: "18064",
      name: "Blue and white tie-dye half-placket mandarin collar shirt",
      color: "Blue",
      MRP: "2,495.00"
    },
    {
      style: "18063",
      name: "Green tropical print kaftan dress with tassels",
      color: "Green",
      MRP: "2,595.00"
    },
    {
      style: "18062",
      name: "Vibrant Muti print kaftan dress with tassels .",
      color: "Multi",
      MRP: "2,595.00"
    },
    {
      style: "18061",
      name: "Blue and white Marbel half-placket mandarin collar shirt",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "18059",
      name: "Navy polka georgette A-line dress with V-neck and bell sleeves",
      color: "Navy",
      MRP: "3,195.00"
    },
    {
      style: "18058",
      name: "Pista Green  floral A-line long skirt",
      color: "Pista Green",
      MRP: "2,495.00"
    },
    {
      style: "18057",
      name: "Green check rayon full placket  button shirt dress   Party shirt",
      color: "Green",
      MRP: "4,095.00"
    },
    {
      style: "",
      name: "",
      color: "",
      MRP: ""
    },
    {
      style: "18055",
      name: "Wine Silk sequins yoke Party Dress",
      color: "Wine",
      MRP: "4,095.00"
    },
    {
      style: "18052",
      name: "Forest Green Zebra print full placket Resort shirt",
      color: "Green",
      MRP: "2,495.00"
    },
    {
      style: "18051",
      name: "Wine Zebra print full placket Resort shirt",
      color: "Wine",
      MRP: "2,495.00"
    },
    {
      style: "18050",
      name: "Orange Zebra print full placket Resort shirt",
      color: "Orange",
      MRP: "2,495.00"
    },
    {
      style: "18049",
      name: "Lime Green Tropical print full placket Resort shirt",
      color: "Lime Green",
      MRP: "2,495.00"
    },
    {
      style: "18048",
      name: "Multi Tropical print full placket Resort shirt",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "18047",
      name: "Stylish Sky blue midi dress.",
      color: "Sky Blue",
      MRP: "3,195.00"
    },
    {
      style: "18046",
      name: "Stylish Neon green  midi dress.",
      color: "Neon Green",
      MRP: "3,195.00"
    },
    {
      style: "18045",
      name: "Stylish Magenta midi dress.",
      color: "Magenta",
      MRP: "3,195.00"
    },
    {
      style: "18044",
      name: "Stylish Teal midi dress.",
      color: "Teal",
      MRP: "3,595.00"
    },
    {
      style: "18043",
      name: "Stylish  Red midi dress.",
      color: "Red",
      MRP: "3,995.00"
    },
    {
      style: "18042",
      name: "Stylish Bottle green midi dress.",
      color: "Green",
      MRP: "3,995.00"
    },
    {
      style: "18041",
      name: "Stylish Lavender midi dress.",
      color: "Lavender",
      MRP: "3,195.00"
    },
    {
      style: "18040",
      name: "Stylish Sea green midi dress.",
      color: "Mint Green",
      MRP: "3,195.00"
    },
    {
      style: "18039",
      name: "Stylish Black midi dress.",
      color: "Black",
      MRP: "3,195.00"
    },
    {
      style: "18038",
      name: "Green shirt with tropical print, featuring a half placket, mandarin collar, and regular sleeve",
      color: "Green",
      MRP: "3,195.00"
    },
    {
      style: "18037",
      name: "Green Leaf print Mandarin collar  V neck tunic dress",
      color: "Green",
      MRP: "3,395.00"
    },
    {
      style: "18036",
      name: "Pink & black polka tie top",
      color: "Pink",
      MRP: "2,395.00"
    },
    {
      style: "18035",
      name: "Magenta solid jersey off-shoulder calf-length dress",
      color: "Magenta",
      MRP: "4,195.00"
    },
    {
      style: "18034",
      name: "Solid cotton trousers with a full elastic waistband.",
      color: "Orange",
      MRP: "2,595.00"
    },
    {
      style: "18033",
      name: "Solid cotton V-neck top with regular sleeves.",
      color: "Orange",
      MRP: "2,595.00"
    },
    {
      style: "18032",
      name: "Solid cotton trousers with a full elastic waistband.",
      color: "Fucia",
      MRP: "2,595.00"
    },
    {
      style: "18031",
      name: "Solid cotton V-neck top with regular sleeves.",
      color: "Fucia",
      MRP: "2,595.00"
    },
    {
      style: "18030",
      name: "Solid cotton trousers with a full elastic waistband.",
      color: "Magenta",
      MRP: "2,595.00"
    },
    {
      style: "18029",
      name: "Solid cotton  slub V-neck top with regular sleeves.",
      color: "Magenta",
      MRP: "2,595.00"
    },
    {
      style: "18028",
      name: "Maroon and Black V-neck ankle-length color-block party dress",
      color: "Maroon",
      MRP: "3,495.00"
    },
    {
      style: "18027",
      name: "Marble print A-line V-neck dress",
      color: "Gray",
      MRP: "3,295.00"
    },
    {
      style: "18026",
      name: "Stylish Off White & black houndstooth midi dress.",
      color: "Off White",
      MRP: "3,595.00"
    },
    {
      style: "18025",
      name: "Multi georgette kaftan top with lace",
      color: "Multi",
      MRP: "2,995.00"
    },
    {
      style: "18024",
      name: "Rust floral print georgette V-neck A-line calf-length dress",
      color: "Rust",
      MRP: "3,095.00"
    },
    {
      style: "18023",
      name: "Powder Blue Polka georgette A-Line V-Neck dress.",
      color: "Blue",
      MRP: "2,995.00"
    },
    {
      style: "18022",
      name: "Peach candy stripe georgette A-Line V-Neck calf length dress.",
      color: "Multi",
      MRP: "3,195.00"
    },
    {
      style: "18021",
      name: "Lime Green Tropical print shrug with full sleeves and side slits",
      color: "Lime Yellow",
      MRP: "2,595.00"
    },
    {
      style: "18020",
      name: "Olive floral satin half-placket shirt",
      color: "Olive",
      MRP: "3,895.00"
    },
    {
      style: "18019",
      name: "Ombre-colored A-line V-neck  summer dress",
      color: "Multi",
      MRP: "3,395.00"
    },
    {
      style: "18018",
      name: "Oversized Cotton slub front open loop button  dress",
      color: "Magenta",
      MRP: "3,295.00"
    },
    {
      style: "18017",
      name: "Oversized Cotton slub front open loop button  dress",
      color: "Pink",
      MRP: "3,295.00"
    },
    {
      style: "18016",
      name: "Oversized Cotton slub front open loop button  dress",
      color: "Salmon Orange",
      MRP: "3,295.00"
    },
    {
      style: "18015",
      name: "Cotton slub front open loop button oversize dress",
      color: "Green",
      MRP: "3,295.00"
    },
    {
      style: "18014",
      name: "Purple lycra full waist band",
      color: "Purple",
      MRP: "3,995.00"
    },
    {
      style: "18013",
      name: "purple lycra shrug.",
      color: "Purple",
      MRP: "4,395.00"
    },
    {
      style: "18012",
      name: "Peach floral trouser",
      color: "Peach",
      MRP: "2,795.00"
    },
    {
      style: "18011",
      name: "Peach floral half placket shirt",
      color: "Peach",
      MRP: "3,095.00"
    },
    {
      style: "18010",
      name: "Red solid rib trouser.",
      color: "Red",
      MRP: "3,995.00"
    },
    {
      style: "18009",
      name: "Red solid rib v-neck top",
      color: "Red",
      MRP: "4,795.00"
    },
    {
      style: "18008",
      name: "Beige solid rib trouser.",
      color: "Beige",
      MRP: "3,995.00"
    },
    {
      style: "18007",
      name: "Beige solid rib v-neck top",
      color: "Beige",
      MRP: "4,795.00"
    },
    {
      style: "18006",
      name: "Multi colour georgette top",
      color: "Multi",
      MRP: "2,695.00"
    },
    {
      style: "18005",
      name: "Neon yellow solid crepe trouser.",
      color: "Neon Yellow",
      MRP: "2,795.00"
    },
    {
      style: "18004",
      name: "Neon yellow V-Neck short  kaftan",
      color: "Neon Yellow",
      MRP: "2,395.00"
    },
    {
      style: "18003",
      name: "Black and white stripe crepe trouser",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "18002",
      name: "Black and white stripe crepe half placket shirt",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "18001",
      name: "Magenta and white stripe trouser",
      color: "Magenta",
      MRP: "2,795.00"
    },
    {
      style: "18000",
      name: "Magenta and white stripe shirt",
      color: "Magenta",
      MRP: "3,095.00"
    },
    {
      style: "17099",
      name: "Wine and white stripe crepe trouser",
      color: "Wine",
      MRP: "2,795.00"
    },
    {
      style: "17098",
      name: "Wine and white stripe crepe shirt",
      color: "Wine",
      MRP: "3,095.00"
    },
    {
      style: "17097",
      name: "Maroon and white stripe trouser",
      color: "Maroon",
      MRP: "2,795.00"
    },
    {
      style: "17096",
      name: "Maroon and white stripe shirt",
      color: "Maroon",
      MRP: "3,095.00"
    },
    {
      style: "17095",
      name: "Teal solid velvet waistband trouser",
      color: "Teal",
      MRP: "4,195.00"
    },
    {
      style: "17094",
      name: "Teal solid velvet fabric hoodie",
      color: "Teal",
      MRP: "5,295.00"
    },
    {
      style: "17093",
      name: "Navy velvet trouser",
      color: "Navy",
      MRP: "4,195.00"
    },
    {
      style: "17092",
      name: "Navy  solid velvet fabric hoodie",
      color: "Navy",
      MRP: "5,295.00"
    },
    {
      style: "17091",
      name: "Navy and white stripe pants",
      color: "Navy",
      MRP: "2,895.00"
    },
    {
      style: "17090",
      name: "Navy and white stripe shirt",
      color: "Navy",
      MRP: "3,095.00"
    },
    {
      style: "17089",
      name: "Maroon Velvet  pants",
      color: "Maroon",
      MRP: "3,095.00"
    },
    {
      style: "17088",
      name: "Maroon solid velvet fabric hoodie",
      color: "Maroon",
      MRP: "3,695.00"
    },
    {
      style: "17087",
      name: "Bottle green  fleece long jacket",
      color: "Bottle green",
      MRP: "3,695.00"
    },
    {
      style: "17086",
      name: "Bronze Silk Embellished V-neck top",
      color: "Bronze",
      MRP: "3,995.00"
    },
    {
      style: "17085",
      name: "Solid Black cotton slub Resort Oversize dress",
      color: "Black",
      MRP: "4,195.00"
    },
    {
      style: "17084",
      name: "Solid white cotton slub resort Oversize dress",
      color: "White",
      MRP: "4,195.00"
    },
    {
      style: "17083",
      name: "Pink & White check pants",
      color: "Pink",
      MRP: "2,395.00"
    },
    {
      style: "17082",
      name: "Green & White check pants",
      color: "Green",
      MRP: "2,395.00"
    },
    {
      style: "17081",
      name: "Green & white stripe crepe pants.",
      color: "Green",
      MRP: "2,395.00"
    },
    {
      style: "17080",
      name: "Hot pink crepe half placket shirt.",
      color: "Pink",
      MRP: "2,695.00"
    },
    {
      style: "17079",
      name: "Black & white Geometric Print Shirt.",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "17078",
      name: "Navy & white floral stripe tie top",
      color: "Blue",
      MRP: "2,595.00"
    },
    {
      style: "17077",
      name: "Navy floral mandarin collar top.",
      color: "Blue",
      MRP: "3,595.00"
    },
    {
      style: "17076",
      name: "Magenta Polka dot Resort shirt",
      color: "Pink",
      MRP: "2,795.00"
    },
    {
      style: "17075",
      name: "Red Georgette  Ombre sequins  party dress",
      color: "Red",
      MRP: "5,395.00"
    },
    {
      style: "17074",
      name: "Maroon fleece v-neck poncho with a contrast border.",
      color: "Maroon",
      MRP: "4,795.00"
    },
    {
      style: "17073",
      name: "Satin Eclectic print V-Neck stylish kaftan dress",
      color: "Beige",
      MRP: "3,595.00"
    },
    {
      style: "17071",
      name: "Front Open Magenta fleece long Coat",
      color: "Magenta",
      MRP: "3,995.00"
    },
    {
      style: "17070",
      name: "Teal shimmery geogette party shrug with sequins embelishment",
      color: "Teal",
      MRP: "4,895.00"
    },
    {
      style: "17068",
      name: "Rust and white polka dot Trousers",
      color: "Rust",
      MRP: "2,395.00"
    },
    {
      style: "17067",
      name: "Rust and white polka dot half placket shirt",
      color: "Rust",
      MRP: "2,895.00"
    },
    {
      style: "17066",
      name: "Sky blue camouflage print Trouser",
      color: "Sky Blue",
      MRP: "2,395.00"
    },
    {
      style: "17065",
      name: "Sky blue camouflage print half placket shirt",
      color: "Sky Blue",
      MRP: "2,895.00"
    },
    {
      style: "17064",
      name: "Blue  Japnese floral print Trousers",
      color: "Blue",
      MRP: "2,595.00"
    },
    {
      style: "17063",
      name: "Blue Japnese floral print half placket shirt",
      color: "Blue",
      MRP: "2,795.00"
    },
    {
      style: "17062",
      name: "Wine and black leopard print trousers",
      color: "Wine",
      MRP: "2,595.00"
    },
    {
      style: "17061",
      name: "Wine and black leopard print half placket shirt",
      color: "Wine",
      MRP: "2,895.00"
    },
    {
      style: "17058",
      name: "Hot pink and white  polka dot trousers",
      color: "Pink",
      MRP: "2,595.00"
    },
    {
      style: "17057",
      name: "Hot pink and white polka dot shirt",
      color: "Pink",
      MRP: "2,795.00"
    },
    {
      style: "17056",
      name: "Navy and pink polka dot trousers",
      color: "Navy",
      MRP: "2,595.00"
    },
    {
      style: "17055",
      name: "Navy and pink polka dot shirt",
      color: "Navy",
      MRP: "2,795.00"
    },
    {
      style: "17054",
      name: "Hot pink half placket mandarin collar satin shirt.",
      color: "Pink",
      MRP: "3,595.00"
    },
    {
      style: "17053",
      name: "Olive Gold Shimmer Party Dress",
      color: "Olive",
      MRP: "4,595.00"
    },
    {
      style: "17052",
      name: "Blue and white tie & die  half placket top",
      color: "Blue",
      MRP: "3,495.00"
    },
    {
      style: "17051",
      name: "Fuchsia pink  embelished V neck swing dress",
      color: "Fuchsia Pink",
      MRP: "5,195.00"
    },
    {
      style: "17050",
      name: "Green plaid colorblock shirt.",
      color: "Green",
      MRP: "4,295.00"
    },
    {
      style: "17047",
      name: "Solid Charcoal gray  fleece long jacket",
      color: "Gray",
      MRP: "4,495.00"
    },
    {
      style: "17046",
      name: "Solid Coffee  brown fleece long jacket",
      color: "Brown",
      MRP: "3,895.00"
    },
    {
      style: "17045",
      name: "Solid Red fleece long jacket",
      color: "Red",
      MRP: "4,495.00"
    },
    {
      style: "17044",
      name: "Maroon fleece coat with rabbit fur collar and sleeves hems",
      color: "Maroon",
      MRP: "4,795.00"
    },
    {
      style: "17043",
      name: "Bagatelle Drape fleece Jacket",
      color: "Ivory",
      MRP: "5,195.00"
    },
    {
      style: "17042",
      name: "Beige suede poncho",
      color: "Beige",
      MRP: "10,795.00"
    },
    {
      style: "17041",
      name: "Mint green poncho",
      color: "Mint Green",
      MRP: "9,595.00"
    },
    {
      style: "17040",
      name: "Ivory  fleece coat with rabbit fur collar and sleeves",
      color: "Ivory",
      MRP: "6,295.00"
    },
    {
      style: "17039",
      name: "Harringbone  balck and gray  long jacket with notched collar",
      color: "Black",
      MRP: "8,595.00"
    },
    {
      style: "17038",
      name: "Beige Suede leather  coat with  collar and sleeves hems",
      color: "Beige",
      MRP: "8,295.00"
    },
    {
      style: "17037",
      name: "Brown Suede leather  coat with  collar and sleeves hems",
      color: "Brown",
      MRP: "6,395.00"
    },
    {
      style: "17036",
      name: "Black fleece coat with rabbit fur collar and sleeves hems",
      color: "Black",
      MRP: "4,395.00"
    },
    {
      style: "17035",
      name: "Black Rabbit fur long jacket",
      color: "Black",
      MRP: "13,695.00"
    },
    {
      style: "17034",
      name: "Bagatelle Drape Fleece Jacket, Complete your contemporary look with an open-front jacket",
      color: "Gray",
      MRP: "3,095.00"
    },
    {
      style: "17033",
      name: "Bagatelle Drape Fleece Jacket, Complete your contemporary look with an open-front jacket",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "17032",
      name: "Bagatelle Drape Fleece Jacket, Complete your contemporary look with an open-front jacket",
      color: "Yellow",
      MRP: "3,095.00"
    },
    {
      style: "17031",
      name: "Bagatelle Drape Fleece Jacket, Complete your contemporary look with an open-front jacket",
      color: "Yellow",
      MRP: "3,695.00"
    },
    {
      style: "17030",
      name: "Bagatelle Drape Couture soft Jacket, Complete your contemporary look with an open-front jacket",
      color: "Wine",
      MRP: "3,995.00"
    },
    {
      style: "17029",
      name: "Black Satin Party Dress",
      color: "Black",
      MRP: "3,895.00"
    },
    {
      style: "17028",
      name: "Ombre georgette long dress",
      color: "Green",
      MRP: "4,595.00"
    },
    {
      style: "17027",
      name: "Multi colour print crepe half placket shirt",
      color: "Multi",
      MRP: "2,795.00"
    },
    {
      style: "17026",
      name: "Maroon silk full placket shirt",
      color: "Maroon",
      MRP: "3,795.00"
    },
    {
      style: "17025",
      name: "Solid Olive crepe half placket shirt",
      color: "Olive",
      MRP: "2,595.00"
    },
    {
      style: "17024",
      name: "Gray marbal print half placket shirt",
      color: "Gray",
      MRP: "2,695.00"
    },
    {
      style: "17023",
      name: "Navy and Pink  polka dott half placket shirt",
      color: "Pink",
      MRP: "2,795.00"
    },
    {
      style: "17022",
      name: "Burgundy and white polka dott half placket shirt",
      color: "Burgundy",
      MRP: "2,795.00"
    },
    {
      style: "17021",
      name: "Pink and white small polka dott  and stripe  full placket shirt",
      color: "Pink",
      MRP: "2,995.00"
    },
    {
      style: "17020",
      name: "Black and white small polka dott color-blocked full placket shirt",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "17019",
      name: "Purple popcorn swiss dott half placket shirt",
      color: "Purple",
      MRP: "2,895.00"
    },
    {
      style: "17018",
      name: "Brown leopard print half placket shirt",
      color: "Brown",
      MRP: "2,795.00"
    },
    {
      style: "17017",
      name: "Black and white check half placket shirt",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "17016",
      name: "Beige stripe half placket shirt",
      color: "Beige",
      MRP: "2,895.00"
    },
    {
      style: "17015",
      name: "Black striped crepe half placket shirt",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "17014",
      name: "White popcorn swiss dott half placket shirt",
      color: "White",
      MRP: "2,895.00"
    },
    {
      style: "17013",
      name: "Silk crepe half placket shirt",
      color: "Yellow",
      MRP: "3,095.00"
    },
    {
      style: "17012",
      name: "Black rayon Gather Neck Top",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "17011",
      name: "Ombre Georgette square neck dress",
      color: "Purple",
      MRP: "3,995.00"
    },
    {
      style: "17010",
      name: "Rayon floral half placket shirt",
      color: "Olive",
      MRP: "3,495.00"
    },
    {
      style: "17009",
      name: "Silk half placket shirt",
      color: "Pista Green",
      MRP: "3,895.00"
    },
    {
      style: "17008",
      name: "Greenand White Stripe half placket shirt.",
      color: "White",
      MRP: "2,795.00"
    },
    {
      style: "17007",
      name: "Blue and White Stripe shirt",
      color: "Blue",
      MRP: "3,095.00"
    },
    {
      style: "17006",
      name: "Pink Georgette shrug with Sequin border",
      color: "Pink",
      MRP: "3,195.00"
    },
    {
      style: "17005",
      name: "Yellow silk shrug",
      color: "Yellow",
      MRP: "3,695.00"
    },
    {
      style: "17004",
      name: "Green Tropical half placket shirt",
      color: "Green",
      MRP: "2,795.00"
    },
    {
      style: "17003",
      name: "White V-neck Full cuff  sleeve top.",
      color: "White",
      MRP: "3,095.00"
    },
    {
      style: "17002",
      name: "Turquoise V-neckTop",
      color: "Turquoise",
      MRP: "4,095.00"
    },
    {
      style: "17001",
      name: "Floral crepe print V Neck Kaftan dress",
      color: "Gray",
      MRP: "2,995.00"
    },
    {
      style: "17000",
      name: "Pink Floral Gather Neck Top",
      color: "Pink",
      MRP: "2,595.00"
    },
    {
      style: "16099",
      name: "Green Tropical print top Gather on Neck.",
      color: "Multi",
      MRP: "2,595.00"
    },
    {
      style: "16098",
      name: "Black silk shrug",
      color: "Black",
      MRP: "4,295.00"
    },
    {
      style: "16097",
      name: "Yellow and white floral dress",
      color: "Yellow",
      MRP: "3,595.00"
    },
    {
      style: "16096",
      name: "Navy blue  Top With stylish Mesh  Bell Sleeves",
      color: "Navy",
      MRP: "2,595.00"
    },
    {
      style: "16095",
      name: "Bottle Green Top With stylish Mesh Bell Sleeves",
      color: "Green",
      MRP: "2,595.00"
    },
    {
      style: "16094",
      name: "Turquoise Top With stylish Mesh Bell Sleeves",
      color: "Turquoise",
      MRP: "2,595.00"
    },
    {
      style: "16093",
      name: "Orange V neck  Kaftan with gold  ring",
      color: "Orange",
      MRP: "2,695.00"
    },
    {
      style: "16092",
      name: "Olive georgette with gold shimmer  party shrug",
      color: "Olive",
      MRP: "6,595.00"
    },
    {
      style: "16091",
      name: "Silk fabric party shrug with sequins border",
      color: "Black",
      MRP: "4,895.00"
    },
    {
      style: "16090",
      name: "Cotton slub front open loop button oversize dress",
      color: "Navy",
      MRP: "3,295.00"
    },
    {
      style: "16089",
      name: "Black  party long dress with gold chain embelishment",
      color: "Black",
      MRP: "4,495.00"
    },
    {
      style: "16088",
      name: "Black lycra  straight skirt with side slits",
      color: "Black",
      MRP: "3,195.00"
    },
    {
      style: "16087",
      name: "Black  Long Party Dress with gold shouder chain straps",
      color: "Black",
      MRP: "4,695.00"
    },
    {
      style: "16086",
      name: "Stylish suede  long Coat",
      color: "Beige",
      MRP: "12,695.00"
    },
    {
      style: "16085",
      name: "Orange satin floral print mandrain collar shirt with full cuff sleeves",
      color: "Orange",
      MRP: "3,795.00"
    },
    {
      style: "16084",
      name: "Navy blue lurex button  Party shirt",
      color: "Navy",
      MRP: "3,995.00"
    },
    {
      style: "16083",
      name: "Rayon dobby half placket shirt with full cuff sleeves",
      color: "Green",
      MRP: "3,995.00"
    },
    {
      style: "16082",
      name: "Magenta leopard print half placket shirt with full cuff sleeves",
      color: "Magenta",
      MRP: "3,795.00"
    },
    {
      style: "16081",
      name: "Pink and White plaid half placket shirt with full cuff sleeves.",
      color: "Pink",
      MRP: "2,895.00"
    },
    {
      style: "16080",
      name: "Stylish suede  long Coat",
      color: "Brown",
      MRP: "12,595.00"
    },
    {
      style: "16079",
      name: "Teal shimmery geogette party shrug with sequins embelishment",
      color: "Teal",
      MRP: "4,795.00"
    },
    {
      style: "16078",
      name: "Red shimmery geogette party shrug with sequins embelishment",
      color: "Red",
      MRP: "4,795.00"
    },
    {
      style: "16077",
      name: "Wine shimmery geogette party shrug with sequins embelishment",
      color: "Wine",
      MRP: "4,795.00"
    },
    {
      style: "16076",
      name: "Magenta party long dress with baloon sleeves",
      color: "Magenta",
      MRP: "4,395.00"
    },
    {
      style: "16075",
      name: "Deep Red long party dress embellished with gold chain",
      color: "Red",
      MRP: "3,695.00"
    },
    {
      style: "16074",
      name: "Teal and White plaid half placket shirt with full cuff sleeves.",
      color: "Teal",
      MRP: "2,895.00"
    },
    {
      style: "16073",
      name: "Red long pleated party skirt with a glittery elastic waistband",
      color: "Red",
      MRP: "4,495.00"
    },
    {
      style: "16072",
      name: "Colorblock A Line party Silk Dress",
      color: "Blue",
      MRP: "4,095.00"
    },
    {
      style: "16071",
      name: "White and Black polka georgette half placket shirt",
      color: "White",
      MRP: "3,095.00"
    },
    {
      style: "16070",
      name: "Cotton slub Shirt dress with cuff sleeves",
      color: "Green",
      MRP: "3,395.00"
    },
    {
      style: "16069",
      name: "Black long pleated party skirt with a glittery elastic waistband",
      color: "Black",
      MRP: "4,395.00"
    },
    {
      style: "16068",
      name: "Red georgette V-Neck party dress with silver lace on neck & mesh bell sleeves",
      color: "Red",
      MRP: "4,095.00"
    },
    {
      style: "16067",
      name: "Black georgette sequins square neck calf-length party dress",
      color: "Black",
      MRP: "3,895.00"
    },
    {
      style: "16066",
      name: "Emerald Green textured square neck calf-length georgette dress",
      color: "Green",
      MRP: "4,195.00"
    },
    {
      style: "16065",
      name: "Yellow silk half-placket shirt with full cuff sleeves and embellished buttons",
      color: "Yellow",
      MRP: "3,295.00"
    },
    {
      style: "16064",
      name: "Black full slevees hoodie with a gold zipper",
      color: "Black",
      MRP: "4,495.00"
    },
    {
      style: "16063",
      name: "Black lycra strechable  high waist elasticated palazzo",
      color: "Black",
      MRP: "3,995.00"
    },
    {
      style: "16062",
      name: "Lavender lycra strechable  high waist elasticated palazzo",
      color: "Lavender",
      MRP: "3,995.00"
    },
    {
      style: "16061",
      name: "Lavender lycra fabric shrug with full sleeves and side slits",
      color: "Lavender",
      MRP: "4,595.00"
    },
    {
      style: "16060",
      name: "Leopard print V neck Kaftan embellished with gold metal ring",
      color: "Brown",
      MRP: "2,695.00"
    },
    {
      style: "16059",
      name: "Qurvii Women Maroon silk party top with v-neck and bell sleeves,",
      color: "Maroon",
      MRP: "3,595.00"
    },
    {
      style: "16058",
      name: "Qurvii Women Emerald Green party silk top with v-neck and bell sleeves,",
      color: "Green",
      MRP: "3,295.00"
    },
    {
      style: "16057",
      name: "Emerald Green  silk A-Line sequins embelished V neck swing dress",
      color: "Green",
      MRP: "4,295.00"
    },
    {
      style: "16056",
      name: "Maroon  silk A-Line sequins embelished V neck swing dress",
      color: "Maroon",
      MRP: "4,095.00"
    },
    {
      style: "16055",
      name: "Magenta white Polka  crepe  Half-Placket shirt",
      color: "Magenta",
      MRP: "2,795.00"
    },
    {
      style: "16054",
      name: "Red Floral georgette Half-Placket shirt with full cuff sleeves.",
      color: "Red",
      MRP: "2,995.00"
    },
    {
      style: "16053",
      name: "Maroon Rayon half Placket  Shirt",
      color: "Maroon",
      MRP: "4,095.00"
    },
    {
      style: "16052",
      name: "Red Tropical print Shirt",
      color: "Red",
      MRP: "2,795.00"
    },
    {
      style: "16051",
      name: "Sea Green strechable palazzo pant",
      color: "Sea Green",
      MRP: "3,995.00"
    },
    {
      style: "16050",
      name: "Stylish front-open hoodie with Zipper",
      color: "Sea Green",
      MRP: "4,495.00"
    },
    {
      style: "16049",
      name: "Flowy Wine floral net crepe tunic top",
      color: "Wine",
      MRP: "2,695.00"
    },
    {
      style: "16048",
      name: "Wine V neck calf length dress",
      color: "Wine",
      MRP: "3,695.00"
    },
    {
      style: "16047",
      name: "Pink Paisely  Mandrain collar Shirt",
      color: "Pink",
      MRP: "2,795.00"
    },
    {
      style: "16046",
      name: "Stylish Turquoise polka georgette  tie top",
      color: "Turquoise",
      MRP: "2,695.00"
    },
    {
      style: "16045",
      name: "Red rib skirt",
      color: "Red",
      MRP: "3,095.00"
    },
    {
      style: "16044",
      name: "Beige solid rib long dress",
      color: "Beige",
      MRP: "3,995.00"
    },
    {
      style: "16043",
      name: "Red silk Party Shirt",
      color: "Red",
      MRP: "4,095.00"
    },
    {
      style: "16042",
      name: "Coffee brown neck tie top",
      color: "Brown",
      MRP: "2,595.00"
    },
    {
      style: "16041",
      name: "Navy blue  Embelished button  Party shirt",
      color: "Navy",
      MRP: "2,895.00"
    },
    {
      style: "16040",
      name: "Mint green Floral V-neck  tie Top",
      color: "Mint Green",
      MRP: "2,695.00"
    },
    {
      style: "16039",
      name: "Stylish Leopard print Kimono Kaftan Top",
      color: "Mustard",
      MRP: "2,495.00"
    },
    {
      style: "16038",
      name: "Purple Fit and Flare A-Line dress",
      color: "Purple",
      MRP: "3,395.00"
    },
    {
      style: "16037",
      name: "Tropical print asymmetrical dress with adjustable strap",
      color: "Green",
      MRP: "2,695.00"
    },
    {
      style: "16036",
      name: "Ombre multi-color Evening shirt",
      color: "Multi",
      MRP: "3,095.00"
    },
    {
      style: "16035",
      name: "Wine & white striped half placket shirt with full cuff sleeves",
      color: "Wine",
      MRP: "2,695.00"
    },
    {
      style: "16034",
      name: "Rust marble-printed tie top with full cuff sleeves",
      color: "Rust",
      MRP: "2,695.00"
    },
    {
      style: "16033",
      name: "Red and white floral below knee length kaftan dress",
      color: "Red",
      MRP: "2,895.00"
    },
    {
      style: "16032",
      name: "White and pink polka georgette mandrain collar shirt",
      color: "White",
      MRP: "2,695.00"
    },
    {
      style: "16031",
      name: "Emerald green crepe top with floral  net sleeves and yoke",
      color: "Green",
      MRP: "2,495.00"
    },
    {
      style: "16030",
      name: "Leopard print V neck Kaftan embellished with gold metal ring",
      color: "Mustard",
      MRP: "2,995.00"
    },
    {
      style: "16029",
      name: "Floral border print V Neck Silk Kaftan dress",
      color: "Beige",
      MRP: "2,595.00"
    },
    {
      style: "16028",
      name: "White and yellow polka georgette half placket shirt with full sleeves",
      color: "White",
      MRP: "2,795.00"
    },
    {
      style: "16027",
      name: "Ivory fleece long coat with pockets",
      color: "Ivory",
      MRP: "3,595.00"
    },
    {
      style: "16026",
      name: "Black and white houndstooth long coat",
      color: "Black",
      MRP: "6,395.00"
    },
    {
      style: "16025",
      name: "Green Tropical print shrug with 3/4 regular sleeves and contrast neon pompom lace",
      color: "Green",
      MRP: "3,195.00"
    },
    {
      style: "16024",
      name: "Turquoise geometric print kaftan with tassels",
      color: "Turquoise",
      MRP: "2,595.00"
    },
    {
      style: "16023",
      name: "Black V-Neck top with tie",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "16022",
      name: "Blush pink Silk V-neck top with bell sleeve",
      color: "Blush Pink",
      MRP: "2,895.00"
    },
    {
      style: "16021",
      name: "Multi-print shrug with 3/4 hi lo bell sleeves",
      color: "Multi",
      MRP: "2,795.00"
    },
    {
      style: "16020",
      name: "Lilac Swiss dot cold shoulder Ruffle top with bell sleeves",
      color: "Lavender",
      MRP: "3,295.00"
    },
    {
      style: "16019",
      name: "Multi-floral V-neck kaftan with tassels.",
      color: "Multi",
      MRP: "2,895.00"
    },
    {
      style: "16018",
      name: "Georgette A-line V-neck dress with high-low bell sleeves",
      color: "Peach",
      MRP: "3,695.00"
    },
    {
      style: "16017",
      name: "Black solid cold shoulder ruffle top with bell sleeves",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "16016",
      name: "White floral cold shoulder ruffle op with bell sleeves",
      color: "White",
      MRP: "3,295.00"
    },
    {
      style: "16015",
      name: "Pink Swiss dot cold shoulder ruffle top with bell sleeves",
      color: "Pink",
      MRP: "3,295.00"
    },
    {
      style: "16014",
      name: "Floral print A line midi dress with 3/4 sleeve",
      color: "Mint Green",
      MRP: "3,495.00"
    },
    {
      style: "16013",
      name: "Brush paint V-neck kaftan with side tassels.",
      color: "Multi",
      MRP: "2,495.00"
    },
    {
      style: "16012",
      name: "Multi-print full placket shirt with drop shoulders",
      color: "Multi",
      MRP: "2,795.00"
    },
    {
      style: "16011",
      name: "Red jersey cold shoulder summer dress",
      color: "Red",
      MRP: "3,395.00"
    },
    {
      style: "16010",
      name: "Black jersey cold shoulder summer dress",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "16009",
      name: "Red Tropical Resort  Shrug",
      color: "Red",
      MRP: "2,495.00"
    },
    {
      style: "16008",
      name: "Black Straight fitted strech long skirt",
      color: "Black",
      MRP: "3,595.00"
    },
    {
      style: "16007",
      name: "Lycra houndstooth long skirt",
      color: "Black",
      MRP: "4,595.00"
    },
    {
      style: "16006",
      name: "Qurvii womens lavender Organza party  dress .",
      color: "Purple",
      MRP: "5,395.00"
    },
    {
      style: "16005",
      name: "Lavender blush Silk Organza party dress",
      color: "Lavender Blush",
      MRP: "6,095.00"
    },
    {
      style: "16004",
      name: "Caramel french crepe half placket shirt",
      color: "Caramel",
      MRP: "2,895.00"
    },
    {
      style: "16003",
      name: "White with big yellow polkasummer  dress",
      color: "White",
      MRP: "3,995.00"
    },
    {
      style: "16002",
      name: "Mint green paisely maxi summer dress",
      color: "Mint Green",
      MRP: "4,595.00"
    },
    {
      style: "16001",
      name: "Black and White colorblock stripe shirt",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "16000",
      name: "Sky blue polka georgette A line dress",
      color: "Sky Blue",
      MRP: "3,295.00"
    },
    {
      style: "15099",
      name: "Qurvii Women Turquoise half placket party shirt",
      color: "Turquoise",
      MRP: "3,395.00"
    },
    {
      style: "15098",
      name: "Turquoise flowy silhoute faux wrap around maxi party dress",
      color: "Turquoise",
      MRP: "4,595.00"
    },
    {
      style: "15097",
      name: "Elegant v-neck Party dress with 3/4 sleeves",
      color: "Sea Green",
      MRP: "4,295.00"
    },
    {
      style: "15096",
      name: "Qurvii women Multi abstract print half placket shirt",
      color: "Multi",
      MRP: "2,795.00"
    },
    {
      style: "15095",
      name: "Neon Yellow abstract print half placket shirt",
      color: "Neon Yellow",
      MRP: "2,795.00"
    },
    {
      style: "15094",
      name: "White with big Pink polka summer  dress",
      color: "White",
      MRP: "3,995.00"
    },
    {
      style: "15093",
      name: "Wine and white striped flap collar shirt",
      color: "Wine",
      MRP: "2,695.00"
    },
    {
      style: "15092",
      name: "Sea Green digital print resort kaftan",
      color: "Sea Green",
      MRP: "2,595.00"
    },
    {
      style: "15091",
      name: "black floral net dress",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "15090",
      name: "Multi colourTropical print shrug",
      color: "Multi",
      MRP: "2,595.00"
    },
    {
      style: "15089",
      name: "Black floral drop shoulder collar shirt",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "15088",
      name: "Neon Multi geometric print  shirt.",
      color: "Multi",
      MRP: "2,695.00"
    },
    {
      style: "15087",
      name: "Pink paisely A line dress",
      color: "Pink",
      MRP: "3,995.00"
    },
    {
      style: "15086",
      name: "Solid black Lycra slim fit strech dress",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "15085",
      name: "green tropical print shrug",
      color: "Green",
      MRP: "2,595.00"
    },
    {
      style: "15084",
      name: "Black gold swiss dot shrug",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "15083",
      name: "Burgundy Floral net A line dress",
      color: "Burgundy",
      MRP: "3,195.00"
    },
    {
      style: "15082",
      name: "Red Rib Slim Fit strech dress",
      color: "Red",
      MRP: "3,595.00"
    },
    {
      style: "15081",
      name: "Ivory floral net A line dress",
      color: "Ivory",
      MRP: "3,195.00"
    },
    {
      style: "15080",
      name: "Green Flloral  netA line dress",
      color: "Green",
      MRP: "3,195.00"
    },
    {
      style: "15079",
      name: "Lavender floral A line dress",
      color: "Lavender",
      MRP: "3,295.00"
    },
    {
      style: "15078",
      name: "navy polka dress",
      color: "Navy",
      MRP: "3,295.00"
    },
    {
      style: "15077",
      name: "Turquoise blue full placket shirt with full cuff sleeves",
      color: "Turquoise",
      MRP: "3,195.00"
    },
    {
      style: "",
      name: "",
      color: "",
      MRP: ""
    },
    {
      style: "15076",
      name: "Pista Green rayon v-neck top",
      color: "Green",
      MRP: "2,895.00"
    },
    {
      style: "15075",
      name: "Pink rayon half placket shirt",
      color: "Pink",
      MRP: "3,095.00"
    },
    {
      style: "15074",
      name: "Tropical print Resort shirt",
      color: "Green",
      MRP: "2,595.00"
    },
    {
      style: "15073",
      name: "big multicolor polka shirt",
      color: "Multi",
      MRP: "2,595.00"
    },
    {
      style: "",
      name: "",
      color: "",
      MRP: ""
    },
    {
      style: "15072",
      name: "Grey solid half placket shirt",
      color: "Gray",
      MRP: "3,095.00"
    },
    {
      style: "15071",
      name: "olive floral georgette V-neck top",
      color: "Olive",
      MRP: "2,595.00"
    },
    {
      style: "15070",
      name: "Navy stripe shrug",
      color: "Navy",
      MRP: "2,595.00"
    },
    {
      style: "15069",
      name: "navy stripe shirt",
      color: "Navy",
      MRP: "2,995.00"
    },
    {
      style: "15068",
      name: "beige stripe shirt",
      color: "Beige",
      MRP: "2,995.00"
    },
    {
      style: "15067",
      name: "onion Pink plaid shirt",
      color: "Pink",
      MRP: "2,995.00"
    },
    {
      style: "15066",
      name: "Teal green plaid shirt",
      color: "Teal Green",
      MRP: "2,995.00"
    },
    {
      style: "15065",
      name: "Turquoise abstract print dress",
      color: "Turquoise",
      MRP: "3,395.00"
    },
    {
      style: "15064",
      name: "Turquoise abstract print half placket shirt",
      color: "Turquoise",
      MRP: "2,895.00"
    },
    {
      style: "15063",
      name: "black polka drop shoulder top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "15062",
      name: "Mix media solid tunic",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "15061",
      name: "Multi geometric print shirt",
      color: "Multi",
      MRP: "2,795.00"
    },
    {
      style: "15060",
      name: "Multi geometric print shrug",
      color: "Multi",
      MRP: "2,595.00"
    },
    {
      style: "15059",
      name: "Red small polka dress",
      color: "Red",
      MRP: "3,695.00"
    },
    {
      style: "15058",
      name: "neon green tropical print kaftan top",
      color: "Neon Green",
      MRP: "2,795.00"
    },
    {
      style: "15057",
      name: "white polka georgette V-neck top",
      color: "White",
      MRP: "2,595.00"
    },
    {
      style: "15056",
      name: "green and white stripe with mandrain collar top and bell sleeves",
      color: "Green",
      MRP: "2,895.00"
    },
    {
      style: "15055",
      name: "A-line pink polka georgette dress",
      color: "Pink",
      MRP: "3,495.00"
    },
    {
      style: "15054",
      name: "A-line pink swiss dot georgette dress",
      color: "Pink",
      MRP: "3,495.00"
    },
    {
      style: "15053",
      name: "A-line sky blue floral georgette V neck dress",
      color: "Sky Blue",
      MRP: "3,495.00"
    },
    {
      style: "15052",
      name: "pink and white stripe crepe top",
      color: "Pink",
      MRP: "2,495.00"
    },
    {
      style: "15051",
      name: "Wine and white stripe v-neck top",
      color: "Wine",
      MRP: "2,495.00"
    },
    {
      style: "15050",
      name: "Wine floral below knee length kaftan with tassels",
      color: "Wine",
      MRP: "2,495.00"
    },
    {
      style: "15049",
      name: "red polka dot v-neck top with kimono sleeves.",
      color: "Red",
      MRP: "2,395.00"
    },
    {
      style: "15048",
      name: "Pista green collar half placket shirt",
      color: "Other",
      MRP: "3,495.00"
    },
    {
      style: "15047",
      name: "Royal blue collar half placket shirt",
      color: "Blue",
      MRP: "3,495.00"
    },
    {
      style: "15046",
      name: "Emerald green collar half placket shirt",
      color: "Green",
      MRP: "3,595.00"
    },
    {
      style: "15045",
      name: "Magenta Peach big floral print",
      color: "Magenta",
      MRP: "2,595.00"
    },
    {
      style: "15044",
      name: "Kimono dress",
      color: "Navy",
      MRP: "3,395.00"
    },
    {
      style: "15043",
      name: "Kimono dress",
      color: "Maroon",
      MRP: "3,395.00"
    },
    {
      style: "15042",
      name: "Kimono dress",
      color: "Fucia",
      MRP: "2,995.00"
    },
    {
      style: "15041",
      name: "Black gold swiss dot shirt",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "15040",
      name: "Lavender swiss dott dress",
      color: "Lavender",
      MRP: "3,495.00"
    },
    {
      style: "15039",
      name: "Maroon swiss dot A-line dress",
      color: "Maroon",
      MRP: "3,495.00"
    },
    {
      style: "15038",
      name: "Pink abstract water color print A-line dress",
      color: "Pink",
      MRP: "3,695.00"
    },
    {
      style: "15037",
      name: "Pink floral abstract print dress",
      color: "Pink",
      MRP: "3,395.00"
    },
    {
      style: "15036",
      name: "White Neon floral kftan dress",
      color: "White",
      MRP: "2,495.00"
    },
    {
      style: "15035",
      name: "Beige floral Faux Wrap Around Dress",
      color: "Beige",
      MRP: "3,995.00"
    },
    {
      style: "15034",
      name: "Pink A-line dress",
      color: "Pink",
      MRP: "3,395.00"
    },
    {
      style: "15033",
      name: "Wine floral A line dress",
      color: "Wine",
      MRP: "3,695.00"
    },
    {
      style: "15032",
      name: "Navy half placket shirt",
      color: "Navy",
      MRP: "3,895.00"
    },
    {
      style: "15031",
      name: "A-line red dress",
      color: "Red",
      MRP: "4,795.00"
    },
    {
      style: "15030",
      name: "Olive colour Shirt dress",
      color: "Olive",
      MRP: "3,495.00"
    },
    {
      style: "15029",
      name: "Pleated Shirt dress",
      color: "Turquoise",
      MRP: "6,195.00"
    },
    {
      style: "15028",
      name: "Ivory floral Faux wrap around dress",
      color: "Ivory",
      MRP: "3,795.00"
    },
    {
      style: "15027",
      name: "Summer floral kaftan dress with tassales",
      color: "Red",
      MRP: "2,595.00"
    },
    {
      style: "15026",
      name: "Zebra floral print kaftan dress",
      color: "White",
      MRP: "2,595.00"
    },
    {
      style: "15025",
      name: "Summer floral kaftan with tassels",
      color: "Other",
      MRP: "2,595.00"
    },
    {
      style: "15024",
      name: "Navy and white floral top",
      color: "Navy",
      MRP: "3,095.00"
    },
    {
      style: "15023",
      name: "Noritake silk wrao-around top",
      color: "Black",
      MRP: "4,395.00"
    },
    {
      style: "15022",
      name: "Leapard print top",
      color: "Mint Green",
      MRP: "3,095.00"
    },
    {
      style: "15021",
      name: "Leopard print satin top",
      color: "Beige",
      MRP: "3,095.00"
    },
    {
      style: "15020",
      name: "Noritake silk v-neck top",
      color: "Turquoise",
      MRP: "3,995.00"
    },
    {
      style: "15019",
      name: "Purple georgette cold shoulder top",
      color: "Purple",
      MRP: "3,395.00"
    },
    {
      style: "15018",
      name: "Black georgette kaftan shirt",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "15017",
      name: "Cold shoulder navy net top",
      color: "Navy",
      MRP: "3,895.00"
    },
    {
      style: "15016",
      name: "Red Top",
      color: "Red",
      MRP: "2,695.00"
    },
    {
      style: "15015",
      name: "Black stripes shirt",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "15014",
      name: "Black stripe shirt",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "15013",
      name: "Navy stripe shirt",
      color: "Navy",
      MRP: "2,895.00"
    },
    {
      style: "15012",
      name: "Teal loop button top",
      color: "Teal",
      MRP: "2,795.00"
    },
    {
      style: "15011",
      name: "Turquoise blue silk top",
      color: "Turquoise",
      MRP: "3,695.00"
    },
    {
      style: "15010",
      name: "Blue printed kaftan",
      color: "Blue",
      MRP: "2,495.00"
    },
    {
      style: "15009",
      name: "Mint green floral georgette A-line dress",
      color: "Mint Green",
      MRP: "3,795.00"
    },
    {
      style: "15008",
      name: "Orange silk top",
      color: "Orange",
      MRP: "3,595.00"
    },
    {
      style: "15007",
      name: "Off white silk baloon sleeve top",
      color: "Ivory",
      MRP: "3,595.00"
    },
    {
      style: "15006",
      name: "Sea green top",
      color: "Other",
      MRP: "2,995.00"
    },
    {
      style: "15005",
      name: "Black top",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "15004",
      name: "Maroon rayon wrap-around top",
      color: "Maroon",
      MRP: "3,195.00"
    },
    {
      style: "15003",
      name: "Magenta silk half placket top",
      color: "Magenta",
      MRP: "3,995.00"
    },
    {
      style: "15002",
      name: "Orange Burfi full placket shirt",
      color: "Peach",
      MRP: "4,195.00"
    },
    {
      style: "15001",
      name: "Red silk full placket shirt",
      color: "Red",
      MRP: "4,495.00"
    },
    {
      style: "15000",
      name: "Red silk half placket top",
      color: "Red",
      MRP: "4,095.00"
    },
    {
      style: "14099",
      name: "Red silk half placket top",
      color: "Red",
      MRP: "4,095.00"
    },
    {
      style: "14098",
      name: "Peach V-neck baloon sleeve top",
      color: "Peach",
      MRP: "2,595.00"
    },
    {
      style: "14097",
      name: "Gray silk front tie top",
      color: "Gray",
      MRP: "2,995.00"
    },
    {
      style: "14096",
      name: "Navy blue and yellow floral kaftan",
      color: "Navy",
      MRP: "2,395.00"
    },
    {
      style: "14095",
      name: "Solid black fleece long skirt",
      color: "Black",
      MRP: "4,295.00"
    },
    {
      style: "14094",
      name: "Solid black fleece long jacket",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "14093",
      name: "Black sequins schiffli party dress",
      color: "Black",
      MRP: "4,395.00"
    },
    {
      style: "14092",
      name: "Mint green floral kaftan",
      color: "Green",
      MRP: "2,395.00"
    },
    {
      style: "14091",
      name: "Black plaid poncho",
      color: "Black",
      MRP: "4,495.00"
    },
    {
      style: "14090",
      name: "Black and white houndstooth short poncho style jacket",
      color: "Black",
      MRP: "7,195.00"
    },
    {
      style: "14089",
      name: "Brown plaid long jacket",
      color: "Brown",
      MRP: "7,595.00"
    },
    {
      style: "14088",
      name: "Black plaid long jacket",
      color: "Black",
      MRP: "8,195.00"
    },
    {
      style: "14087",
      name: "Solid black short jacket",
      color: "Black",
      MRP: "5,895.00"
    },
    {
      style: "14086",
      name: "Black and white Houndstooth long jacket",
      color: "Black",
      MRP: "9,595.00"
    },
    {
      style: "14085",
      name: "Solid light gray fleece long jacket",
      color: "Gray",
      MRP: "3,595.00"
    },
    {
      style: "14084",
      name: "Mustard off- shoulder pleated top",
      color: "Yellow",
      MRP: "2,895.00"
    },
    {
      style: "14083",
      name: "Orange floral kaftan",
      color: "Orange",
      MRP: "2,395.00"
    },
    {
      style: "14082",
      name: "Mustard floral kaftan",
      color: "Rust",
      MRP: "2,395.00"
    },
    {
      style: "14081",
      name: "Black and white floral kaftan",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "14080",
      name: "Red abstract print dress",
      color: "Red",
      MRP: "3,495.00"
    },
    {
      style: "14079",
      name: "Metallic bronze silk V-neck top",
      color: "Bronze",
      MRP: "3,595.00"
    },
    {
      style: "14078",
      name: "Multi-color abstract print long shrug",
      color: "White",
      MRP: "2,295.00"
    },
    {
      style: "14077",
      name: "Red abstract print shrug",
      color: "Red",
      MRP: "2,295.00"
    },
    {
      style: "14076",
      name: "Navy-yellow floral print shrug",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "14075",
      name: "Abstract print A-line dress",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "14074",
      name: "Leopard print shirt",
      color: "Burgundy",
      MRP: "2,795.00"
    },
    {
      style: "14073",
      name: "Leopard print half placket top",
      color: "Brown",
      MRP: "2,595.00"
    },
    {
      style: "14072",
      name: "Purple half placket top",
      color: "Purple",
      MRP: "2,595.00"
    },
    {
      style: "14071",
      name: "Blue abstract print long shrug",
      color: "Blue",
      MRP: "2,495.00"
    },
    {
      style: "14070",
      name: "Red pleated top",
      color: "Red",
      MRP: "2,795.00"
    },
    {
      style: "14069",
      name: "Black floral top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "14068",
      name: "Swiss dot half placket shirt",
      color: "Blue",
      MRP: "3,295.00"
    },
    {
      style: "14067",
      name: "Snake print half placket shirt",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "14066",
      name: "Leopard print shirt",
      color: "Brown",
      MRP: "2,795.00"
    },
    {
      style: "14065",
      name: "Swiss dot long shrug",
      color: "Blue",
      MRP: "3,195.00"
    },
    {
      style: "14064",
      name: "Snake print long shrug",
      color: "Brown",
      MRP: "2,495.00"
    },
    {
      style: "14063",
      name: "Magenta ruffle flutter sleeve  top",
      color: "Magenta",
      MRP: "2,095.00"
    },
    {
      style: "14062",
      name: "Black ruffle flutter sleeve  top",
      color: "Black",
      MRP: "2,095.00"
    },
    {
      style: "14061",
      name: "Gray marble print shrug",
      color: "Gray",
      MRP: "2,495.00"
    },
    {
      style: "14060",
      name: "Maroon Sequins Schiffli Party Dress",
      color: "Maroon",
      MRP: "3,895.00"
    },
    {
      style: "14059",
      name: "Green Sequins Schiffli Party Dress",
      color: "Green",
      MRP: "3,895.00"
    },
    {
      style: "14058",
      name: "Multi floral shrug",
      color: "White",
      MRP: "2,495.00"
    },
    {
      style: "14057",
      name: "Maroon and White stripe shrug",
      color: "Maroon",
      MRP: "2,495.00"
    },
    {
      style: "14056",
      name: "Pleated Teal Tie Top",
      color: "Teal",
      MRP: "3,095.00"
    },
    {
      style: "14055",
      name: "Pleated Magenta Tie Top",
      color: "Maroon",
      MRP: "3,995.00"
    },
    {
      style: "14054",
      name: "Black and White Stripe shrug",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "14053",
      name: "Navy and White Stripe shrug",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "14052",
      name: "Multi floral shrug",
      color: "Multi",
      MRP: "2,495.00"
    },
    {
      style: "14051",
      name: "Blue floral crop top",
      color: "Blue",
      MRP: "2,095.00"
    },
    {
      style: "14050",
      name: "Lavender pleated top",
      color: "Lavender",
      MRP: "3,095.00"
    },
    {
      style: "14049",
      name: "Blue printed palazzo",
      color: "Blue",
      MRP: "2,595.00"
    },
    {
      style: "14048",
      name: "Square neck short dress",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "14047",
      name: "Blue floral print shrug",
      color: "Blue",
      MRP: "2,495.00"
    },
    {
      style: "14046",
      name: "Pink floral tie top",
      color: "Pink",
      MRP: "2,395.00"
    },
    {
      style: "14045",
      name: "Silk floral tie top",
      color: "Bronze",
      MRP: "2,995.00"
    },
    {
      style: "14044",
      name: "Blue Stylish Kimono Kaftan",
      color: "Blue",
      MRP: "2,495.00"
    },
    {
      style: "14043",
      name: "Magenta Stylish Kimono Kaftan",
      color: "Magenta",
      MRP: "2,495.00"
    },
    {
      style: "14042",
      name: "Mint green Swiss Dot Lace Top",
      color: "Mint Green",
      MRP: "2,695.00"
    },
    {
      style: "14041",
      name: "White Cold Shoulder Ruffle Top",
      color: "White",
      MRP: "2,495.00"
    },
    {
      style: "14040",
      name: "Pleated Mustard Tie Top",
      color: "Yellow",
      MRP: "3,395.00"
    },
    {
      style: "14039",
      name: "Cold Shoulder Floral top",
      color: "Sea Green",
      MRP: "2,495.00"
    },
    {
      style: "14038",
      name: "Orange floral shrug",
      color: "Orange",
      MRP: "2,495.00"
    },
    {
      style: "14037",
      name: "Pink floral shrug",
      color: "Pink",
      MRP: "2,495.00"
    },
    {
      style: "14036",
      name: "Orange Silky Shrug",
      color: "Orange",
      MRP: "3,595.00"
    },
    {
      style: "14035",
      name: "Orange Silky A Line Dress",
      color: "Orange",
      MRP: "5,395.00"
    },
    {
      style: "14034",
      name: "Pink A-Line Silky Dress",
      color: "Hot Pink",
      MRP: "5,395.00"
    },
    {
      style: "14033",
      name: "Black And Brown Leopard Print Shrug",
      color: "Brown",
      MRP: "2,395.00"
    },
    {
      style: "14032",
      name: "Black And Brown Tiger Print Dress",
      color: "Brown",
      MRP: "3,195.00"
    },
    {
      style: "14031",
      name: "White And Blue Stripe Cold Shoulder Lace Dress",
      color: "Blue",
      MRP: "5,595.00"
    },
    {
      style: "14030",
      name: "Peach Floral Crop Top",
      color: "Peach",
      MRP: "2,095.00"
    },
    {
      style: "14029",
      name: "Tiger Print A-line Dress",
      color: "Brown",
      MRP: "3,695.00"
    },
    {
      style: "14028",
      name: "Silk Colorblock Shrug",
      color: "Magenta",
      MRP: "3,795.00"
    },
    {
      style: "14027",
      name: "Silk Colorblock Shrug",
      color: "Turquoise",
      MRP: "3,795.00"
    },
    {
      style: "14026",
      name: "White Lace Top",
      color: "White",
      MRP: "2,895.00"
    },
    {
      style: "14025",
      name: "Green Tropical Print Beachy Shrug",
      color: "Green",
      MRP: "2,495.00"
    },
    {
      style: "14024",
      name: "Orange Silk V-neck Top",
      color: "Orange",
      MRP: "3,495.00"
    },
    {
      style: "14023",
      name: "Pink And White Stripe Top",
      color: "Pink",
      MRP: "2,595.00"
    },
    {
      style: "14022",
      name: "Peach Floral Crepe Kaftan Top",
      color: "Peach",
      MRP: "2,495.00"
    },
    {
      style: "14021",
      name: "Black Satin Shirt",
      color: "Black",
      MRP: "3,695.00"
    },
    {
      style: "14020",
      name: "Peach Floral Printed Plazzo",
      color: "Peach",
      MRP: "2,695.00"
    },
    {
      style: "14019",
      name: "Peach Floral Shrug",
      color: "Peach",
      MRP: "2,395.00"
    },
    {
      style: "14018",
      name: "Royal Blue Colorblock Silk Shirt",
      color: "Royal Blue",
      MRP: "3,595.00"
    },
    {
      style: "14017",
      name: "Floral Hi-low Dress",
      color: "Mint Green",
      MRP: "4,295.00"
    },
    {
      style: "14016",
      name: "Colorblock Silk Shirt",
      color: "Turquoise",
      MRP: "3,695.00"
    },
    {
      style: "14015",
      name: "Blue Camouflage Print Shirt",
      color: "Blue",
      MRP: "2,595.00"
    },
    {
      style: "14014",
      name: "Mint Green A- Line Floral Dress",
      color: "Mint Green",
      MRP: "3,795.00"
    },
    {
      style: "14013",
      name: "Lime Green Silky A Line Dress",
      color: "Lime Green",
      MRP: "5,395.00"
    },
    {
      style: "14012",
      name: "Mint Green Floral Mini Dress",
      color: "Mint Green",
      MRP: "3,495.00"
    },
    {
      style: "14011",
      name: "Lemon Yellow Half Placket Top",
      color: "Neon Lemon Yellow",
      MRP: "3,595.00"
    },
    {
      style: "13084",
      name: "Shirt Dress",
      color: "Navy",
      MRP: "4,295.00"
    },
    {
      style: "13083",
      name: "Blue Floral Dress",
      color: "Blue",
      MRP: "2,795.00"
    },
    {
      style: "13082",
      name: "Blue And White Floral Top",
      color: "Blue",
      MRP: "2,295.00"
    },
    {
      style: "13081",
      name: "Mauve Solid A- Line Dress With Scarf",
      color: "Mauve",
      MRP: "2,895.00"
    },
    {
      style: "13080",
      name: "White And Navy Striped Floral Top",
      color: "White",
      MRP: "2,195.00"
    },
    {
      style: "13079",
      name: "Red Floral Top",
      color: "Red",
      MRP: "2,795.00"
    },
    {
      style: "13078",
      name: "White And Navy Striped Floral Shirt Dress",
      color: "White",
      MRP: "2,495.00"
    },
    {
      style: "13077",
      name: "A-line Floral Dress",
      color: "Multi",
      MRP: "2,795.00"
    },
    {
      style: "13076",
      name: "Animal Print Shrug",
      color: "Brown",
      MRP: "2,395.00"
    },
    {
      style: "13075",
      name: "Blue And White Floral Top",
      color: "Blue",
      MRP: "2,495.00"
    },
    {
      style: "13074",
      name: "One Sided Off-shoulder Ruffle Dress",
      color: "Magenta",
      MRP: "3,395.00"
    },
    {
      style: "13073",
      name: "Pink Floral Ruffle Dress",
      color: "Pink",
      MRP: "3,095.00"
    },
    {
      style: "13072",
      name: "Sea Green Silk A-line Dress",
      color: "Sea Green",
      MRP: "3,395.00"
    },
    {
      style: "13071",
      name: "Wine Georgette A-line Dress With Bell Sleeve",
      color: "Wine",
      MRP: "3,895.00"
    },
    {
      style: "13070",
      name: "Hot Pink A Line Silk Dress",
      color: "Pink",
      MRP: "3,795.00"
    },
    {
      style: "13069",
      name: "Colorblock A Line Silk Dress",
      color: "Pink",
      MRP: "3,395.00"
    },
    {
      style: "13068",
      name: "Polka Dot A Line Midi Dress",
      color: "Pink",
      MRP: "2,995.00"
    },
    {
      style: "13067",
      name: "Ruffle Pink Polka Dot Short Dress",
      color: "Pink",
      MRP: "3,095.00"
    },
    {
      style: "13066",
      name: "Tie And Dye Green Shrug",
      color: "Mint Green",
      MRP: "2,495.00"
    },
    {
      style: "13065",
      name: "Leopard Print Shrug",
      color: "Cameo Brown",
      MRP: "2,395.00"
    },
    {
      style: "13064",
      name: "Yellow Floral Shrug",
      color: "Yellow",
      MRP: "2,795.00"
    },
    {
      style: "13063",
      name: "Floral Pink Ruffle Dress",
      color: "Pink",
      MRP: "4,095.00"
    },
    {
      style: "13062",
      name: "Gray Kimono Short Dress",
      color: "Gray",
      MRP: "2,795.00"
    },
    {
      style: "13061",
      name: "Lavender Hi Low Ruffle Dress",
      color: "Lavender",
      MRP: "4,295.00"
    },
    {
      style: "13060",
      name: "Mauve Key Hole Georgette Top",
      color: "Mauve",
      MRP: "3,195.00"
    },
    {
      style: "13059",
      name: "Floral Orange A-line Dress",
      color: "Orange",
      MRP: "3,395.00"
    },
    {
      style: "13058",
      name: "Peach Polka top",
      color: "Peach",
      MRP: "2,495.00"
    },
    {
      style: "13057",
      name: "Red Mesh Bell Sleeve Top",
      color: "Red",
      MRP: "2,795.00"
    },
    {
      style: "13056",
      name: "Magenta Stripe Top",
      color: "Magenta",
      MRP: "2,495.00"
    },
    {
      style: "13055",
      name: "Orange Floral Maxi Dress",
      color: "Orange",
      MRP: "3,995.00"
    },
    {
      style: "13054",
      name: "Pink Off Shoulder Ruffle Dress",
      color: "Magenta",
      MRP: "2,495.00"
    },
    {
      style: "13053",
      name: "Pink Polka Maxi Dress",
      color: "Pink",
      MRP: "4,095.00"
    },
    {
      style: "13052",
      name: "Lilac Jumpsuit",
      color: "Lavender",
      MRP: "4,795.00"
    },
    {
      style: "13051",
      name: "Wine Jumpsuit",
      color: "Maroon",
      MRP: "4,095.00"
    },
    {
      style: "13050",
      name: "Black Jumpsuit",
      color: "Black",
      MRP: "4,095.00"
    },
    {
      style: "13049",
      name: "Navy Polka Short Skirt",
      color: "Blue",
      MRP: "2,395.00"
    },
    {
      style: "13048",
      name: "Navy Polka Off Shoulder Ruffle Top",
      color: "Blue",
      MRP: "1,995.00"
    },
    {
      style: "13047",
      name: "Orange Swiss Dot Top",
      color: "Orange",
      MRP: "2,195.00"
    },
    {
      style: "13046",
      name: "Black Floral Bell Sleeve Top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "13045",
      name: "Burgundy Polka Short Skirt",
      color: "Burgundy",
      MRP: "2,395.00"
    },
    {
      style: "13044",
      name: "Burgundy Off Shoulder Polka Top",
      color: "Burgundy",
      MRP: "1,995.00"
    },
    {
      style: "13043",
      name: "Magenta Party Maxi Dress",
      color: "Magenta",
      MRP: "3,995.00"
    },
    {
      style: "13042",
      name: "Red Floral Mini Dress",
      color: "Red",
      MRP: "2,795.00"
    },
    {
      style: "13041",
      name: "Lavender Top",
      color: "Lavender",
      MRP: "3,095.00"
    },
    {
      style: "13040",
      name: "Black Plaid Poncho",
      color: "Black",
      MRP: "4,295.00"
    },
    {
      style: "13039",
      name: "Red Plaid Poncho",
      color: "Red",
      MRP: "4,295.00"
    },
    {
      style: "13038",
      name: "Black Poncho",
      color: "Black",
      MRP: "3,895.00"
    },
    {
      style: "13037",
      name: "Red Poncho",
      color: "Red",
      MRP: "3,895.00"
    },
    {
      style: "13036",
      name: "Black Floral Dess",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "13035",
      name: "A Line Floral Midi Dress",
      color: "Yellow",
      MRP: "3,095.00"
    },
    {
      style: "13034",
      name: "Long Skirt",
      color: "Gray",
      MRP: "4,295.00"
    },
    {
      style: "13033",
      name: "Long Dress",
      color: "Magenta",
      MRP: "3,295.00"
    },
    {
      style: "13032",
      name: "Long Dress",
      color: "Green",
      MRP: "2,995.00"
    },
    {
      style: "13031",
      name: "Black Poncho",
      color: "Black",
      MRP: "4,295.00"
    },
    {
      style: "13030",
      name: "Charcoal grey poncho",
      color: "Gray",
      MRP: "5,195.00"
    },
    {
      style: "13029",
      name: "Grey Poncho",
      color: "Gray",
      MRP: "4,295.00"
    },
    {
      style: "13028",
      name: "Black Color Kaftan",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "13027",
      name: "Turquoise Kaftan Dress",
      color: "Turquoise",
      MRP: "2,895.00"
    },
    {
      style: "13026",
      name: "Magenta Kaftan Dress",
      color: "Magenta",
      MRP: "2,895.00"
    },
    {
      style: "13025",
      name: "Grey Color Kaftan",
      color: "Gray",
      MRP: "2,895.00"
    },
    {
      style: "13024",
      name: "black pleated top",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "13023",
      name: "Multi Short Kaftan",
      color: "Multi",
      MRP: "2,995.00"
    },
    {
      style: "13022",
      name: "black flap top",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "13021",
      name: "Burgundy Leopard Print Dress",
      color: "Burgundy",
      MRP: "2,595.00"
    },
    {
      style: "13020",
      name: "Black Polka Dress",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "13019",
      name: "Black Stripe Dress",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "13018",
      name: "Blue Polka Dott",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "13017",
      name: "Gray Floral Top",
      color: "Gray",
      MRP: "2,995.00"
    },
    {
      style: "13016",
      name: "Gold Satin Top",
      color: "Gold",
      MRP: "2,795.00"
    },
    {
      style: "13014",
      name: "Floral Black Dress",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "13013",
      name: "Polka Dot Dress",
      color: "Burgundy",
      MRP: "2,595.00"
    },
    {
      style: "13012",
      name: "Leopard Print Shrug",
      color: "Burgundy",
      MRP: "2,795.00"
    },
    {
      style: "13011",
      name: "Pink Floral Dress",
      color: "Pink",
      MRP: "2,295.00"
    },
    {
      style: "13010",
      name: "Multi Color Kaftan",
      color: "Multi",
      MRP: "2,495.00"
    },
    {
      style: "13009",
      name: "Blue And White Kaftan /coverup",
      color: "Blue",
      MRP: "2,195.00"
    },
    {
      style: "13008",
      name: "Floral Long Dress",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "13007",
      name: "Navy Striped Peasant Top",
      color: "Blue",
      MRP: "2,395.00"
    },
    {
      style: "13006",
      name: "V Neck Striped Swing Dress",
      color: "Multi",
      MRP: "3,495.00"
    },
    {
      style: "13005",
      name: "Leopard Print Peasant Top",
      color: "Burgundy",
      MRP: "2,395.00"
    },
    {
      style: "13004",
      name: "Leopard Print Swing Top",
      color: "Burgundy",
      MRP: "2,395.00"
    },
    {
      style: "13003",
      name: "Black Mandrain Collar Polka Top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "13002",
      name: "Bell Sleeve Black Polka Top",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "13001",
      name: "Black Satin Party Dress",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "13000",
      name: "Maroon Satin Party Dress",
      color: "Maroon",
      MRP: "3,895.00"
    },
    {
      style: "12099",
      name: "White Peasant Red Tassel Top",
      color: "White",
      MRP: "3,095.00"
    },
    {
      style: "12098",
      name: "White Peasant Multi Tassel Top",
      color: "White",
      MRP: "3,195.00"
    },
    {
      style: "12096",
      name: "Black Long Dress",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "12095",
      name: "Black Solid Long Dress",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "12094",
      name: "Brown printed skirt",
      color: "Bronze",
      MRP: "2,495.00"
    },
    {
      style: "12093",
      name: "Black Solid Skirt",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "12092",
      name: "Navy Pink Polka Dress",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "12091",
      name: "Mustard Polka Box Pleated Dress",
      color: "Orange",
      MRP: "2,295.00"
    },
    {
      style: "12090",
      name: "Black sold tiered dress",
      color: "Black",
      MRP: "3,895.00"
    },
    {
      style: "12089",
      name: "Rayon printed kaftan",
      color: "Navy",
      MRP: "2,695.00"
    },
    {
      style: "12088",
      name: "Red Floral Off Shoulder Dress",
      color: "Burgundy",
      MRP: "2,495.00"
    },
    {
      style: "12087",
      name: "Grey Marble Print Tunic Dress",
      color: "Gray",
      MRP: "2,395.00"
    },
    {
      style: "12086",
      name: "Green floral tunic dress",
      color: "Green",
      MRP: "3,295.00"
    },
    {
      style: "12085",
      name: "Black Women Shrug",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "12082",
      name: "Floral Print Dress",
      color: "White",
      MRP: "3,295.00"
    },
    {
      style: "12081",
      name: "Tie And Dye Green Kaftan Top",
      color: "Green",
      MRP: "2,495.00"
    },
    {
      style: "12079",
      name: "Olive Women Shrug",
      color: "Olive",
      MRP: "2,695.00"
    },
    {
      style: "12078",
      name: "Yellow Floral Print Peasant Top",
      color: "Yellow",
      MRP: "2,095.00"
    },
    {
      style: "12077",
      name: "Maroon Flap Shirt",
      color: "Maroon",
      MRP: "2,595.00"
    },
    {
      style: "12076",
      name: "Burgundy Polka Crop Top",
      color: "Burgundy",
      MRP: "1,895.00"
    },
    {
      style: "12075",
      name: "Burgundy A-Line polka skirt",
      color: "Burgundy",
      MRP: "2,295.00"
    },
    {
      style: "12074",
      name: "Emerald Green Asymmetrical Hem Top",
      color: "Green",
      MRP: "2,195.00"
    },
    {
      style: "12073",
      name: "Black Geometric Print Shrug",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "12072",
      name: "A Line Floral Midi Dress",
      color: "Pink",
      MRP: "3,195.00"
    },
    {
      style: "12071",
      name: "White Geometric Print Shrug",
      color: "White",
      MRP: "2,295.00"
    },
    {
      style: "12070",
      name: "Burgundy Polka Swing Top",
      color: "Burgundy",
      MRP: "2,295.00"
    },
    {
      style: "12069",
      name: "Multi Colour Mid Length Shrug",
      color: "Multi",
      MRP: "2,095.00"
    },
    {
      style: "12068",
      name: "Floral Georgette Mid Length Shrug",
      color: "Blue",
      MRP: "2,095.00"
    },
    {
      style: "12067",
      name: "Red Party Dress",
      color: "Red",
      MRP: "3,495.00"
    },
    {
      style: "12066",
      name: "Black Swiss Dot Top",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "12065",
      name: "Navy Blue Top",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "12064",
      name: "Black Off Shoulder Top",
      color: "Black",
      MRP: "2,095.00"
    },
    {
      style: "12063",
      name: "Black Flap Shirt",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "12062",
      name: "Black Party Dress",
      color: "Black",
      MRP: "3,495.00"
    },
    {
      style: "12061",
      name: "Black Polka Long Dress",
      color: "Black",
      MRP: "3,995.00"
    },
    {
      style: "12060",
      name: "Pista Green Kaftan",
      color: "Other",
      MRP: "3,195.00"
    },
    {
      style: "12059",
      name: "Rust Oranger Flap Shirt",
      color: "Rust",
      MRP: "2,595.00"
    },
    {
      style: "12058",
      name: "Polka Gather Neck Top",
      color: "Rust",
      MRP: "2,295.00"
    },
    {
      style: "12057",
      name: "Polka Maxi Dress",
      color: "Black",
      MRP: "3,495.00"
    },
    {
      style: "12056",
      name: "Short Length Skirt",
      color: "Multi",
      MRP: "2,195.00"
    },
    {
      style: "12055",
      name: "Small Polka Flap Shirt",
      color: "White",
      MRP: "2,995.00"
    },
    {
      style: "12054",
      name: "Black Flap Top",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "12053",
      name: "Navy Blue Flap Top",
      color: "Navy",
      MRP: "2,595.00"
    },
    {
      style: "12052",
      name: "Mustard Kaftan",
      color: "Yellow",
      MRP: "2,795.00"
    },
    {
      style: "12051",
      name: "Mustard Colour Kaftan",
      color: "Yellow",
      MRP: "2,695.00"
    },
    {
      style: "12050",
      name: "Grey Floral Tunic Dress",
      color: "Gray",
      MRP: "3,195.00"
    },
    {
      style: "12049",
      name: "Shirt Dress",
      color: "Wine",
      MRP: "2,495.00"
    },
    {
      style: "12048",
      name: "Teal Kaftan",
      color: "Teal",
      MRP: "2,795.00"
    },
    {
      style: "12047",
      name: "Multi Color Long Skirt",
      color: "Multi",
      MRP: "2,195.00"
    },
    {
      style: "12046",
      name: "Black Crepe With Yoke Top",
      color: "Black",
      MRP: "1,795.00"
    },
    {
      style: "12045",
      name: "Pink Gathered Top",
      color: "Pink",
      MRP: "2,195.00"
    },
    {
      style: "12044",
      name: "Cotton Sinker Jersey Dress",
      color: "Red",
      MRP: "3,995.00"
    },
    {
      style: "12043",
      name: "Black Ruffle Top",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "12042",
      name: "Crepe Top With Ballon Sleeves, Ruffles On V Neck",
      color: "Red",
      MRP: "2,395.00"
    },
    {
      style: "12041",
      name: "Moss Crepe Shirt With Collars",
      color: "Peach",
      MRP: "2,395.00"
    },
    {
      style: "12040",
      name: "Black Moss Crepe Kaftan Top",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "12039",
      name: "Black Floral Crepe Top With Bell Sleeves",
      color: "Black",
      MRP: "2,195.00"
    },
    {
      style: "12038",
      name: "Black-peach floral shrug",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "12037",
      name: "Crepe Top",
      color: "Yellow",
      MRP: "2,195.00"
    },
    {
      style: "12036",
      name: "Black Georgette Skirt",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "12035",
      name: "White Ggt Skirt",
      color: "White",
      MRP: "2,495.00"
    },
    {
      style: "12033",
      name: "Black Small Polka Dress",
      color: "Black",
      MRP: "3,595.00"
    },
    {
      style: "12032",
      name: "Pink floral print georgette  kaftan",
      color: "Multi",
      MRP: "2,395.00"
    },
    {
      style: "12031",
      name: "Purple/orange Floral Print Georgette Mid Length Kaftan",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "12030",
      name: "Orange Booty Top",
      color: "Orange",
      MRP: "2,395.00"
    },
    {
      style: "12027",
      name: "Black Top With Mesh On Bell Sleeves",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "12026",
      name: "Crepe Top With Bell Sleeves",
      color: "White",
      MRP: "2,295.00"
    },
    {
      style: "12024",
      name: "Black Box Pleat Dress",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "12023",
      name: "Moss Crepe Palazzo",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "12022",
      name: "Orange Printed Overlay",
      color: "Orange",
      MRP: "2,495.00"
    },
    {
      style: "12021",
      name: "Black Satin Tie Top",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "12020",
      name: "Kaftan Dress With Metal Rings",
      color: "Green",
      MRP: "2,895.00"
    },
    {
      style: "12018",
      name: "Red Polka Dress",
      color: "Red",
      MRP: "2,695.00"
    },
    {
      style: "12017",
      name: "Black Jersey Shrug",
      color: "Black",
      MRP: "3,495.00"
    },
    {
      style: "12016",
      name: "Mustard Jersey Shrug",
      color: "Yellow",
      MRP: "7,195.00"
    },
    {
      style: "12015",
      name: "Melange Shrug",
      color: "Gray",
      MRP: "6,695.00"
    },
    {
      style: "12014",
      name: "Mustard Shrug",
      color: "Yellow",
      MRP: "6,695.00"
    },
    {
      style: "12013",
      name: "Navy Flap Shirt",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "12012",
      name: "Black Moss Crepe Rhinestone Embelishment Top",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "12010",
      name: "Maroon Crossover/overlap V Neck Dress",
      color: "Maroon",
      MRP: "2,895.00"
    },
    {
      style: "12009",
      name: "Maroon Box Pleat Dress",
      color: "Maroon",
      MRP: "3,295.00"
    },
    {
      style: "12008",
      name: "Black Frill Mandarin Collar Top",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "12007",
      name: "Black Brocade Yoke Party Maxi Dress",
      color: "Black",
      MRP: "3,995.00"
    },
    {
      style: "12006",
      name: "Navy A Line Dress",
      color: "Navy",
      MRP: "3,495.00"
    },
    {
      style: "12005",
      name: "Mixed Media Hoodie",
      color: "Black",
      MRP: "5,195.00"
    },
    {
      style: "12004",
      name: "Burgundy Frill Mandrain Collar Top",
      color: "Burgundy",
      MRP: "2,395.00"
    },
    {
      style: "12003",
      name: "Ruffle Sleeve Top",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "12002",
      name: "Red floral print peasant Top",
      color: "Red",
      MRP: "3,295.00"
    },
    {
      style: "12001",
      name: "Red Brocade Yoke Party Maxi Dress",
      color: "Red",
      MRP: "3,895.00"
    },
    {
      style: "12000",
      name: "Off Shoulder Midi Dress With Ruffle",
      color: "Black",
      MRP: "5,695.00"
    },
    {
      style: "11199",
      name: "Red sequins party maxi dress",
      color: "Red",
      MRP: "3,095.00"
    },
    {
      style: "11198",
      name: "Waterfall drape front open shrug",
      color: "Maroon",
      MRP: "3,495.00"
    },
    {
      style: "11197",
      name: "Black and white1/2 placket top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "11196",
      name: "Navy Blue V Neck Top With Tie",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "11195",
      name: "Off Shoulder Midi Dress With Ruffle",
      color: "Olive",
      MRP: "4,395.00"
    },
    {
      style: "11194",
      name: "Navy floral A line ruffle dress",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "11193",
      name: "Black Sequins A Line Party Dress",
      color: "Black",
      MRP: "5,695.00"
    },
    {
      style: "11191",
      name: "Elegant V Neck Black Satin Party Maxi Dress",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "11190",
      name: "Black Polka Dot Swing Dress With Bell Sleeves",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "11189",
      name: "Faux Wrap Around Party Maxi Dress",
      color: "Black",
      MRP: "3,595.00"
    },
    {
      style: "11188",
      name: "Black Dress With Round Neck With The Printed Scarf",
      color: "Black",
      MRP: "3,495.00"
    },
    {
      style: "11186",
      name: "Navy Bird print A line Top",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "11185",
      name: "Waterfall drape front open shrug",
      color: "Brown",
      MRP: "3,495.00"
    },
    {
      style: "11184",
      name: "Striped Button Front Shirt Dress",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "11183",
      name: "Blue Paisely print Bell sleeve stylish comfortable cotton top",
      color: "Blue",
      MRP: "3,395.00"
    },
    {
      style: "11182",
      name: "V Neck Red Crepe With Hi Lo Black Buttons",
      color: "Red",
      MRP: "2,495.00"
    },
    {
      style: "11181",
      name: "Lime yellow bird print frill mandarin collar Top",
      color: "Lime Yellow",
      MRP: "2,495.00"
    },
    {
      style: "11180",
      name: "Mandarin collar animal print Top",
      color: "Yellow",
      MRP: "2,495.00"
    },
    {
      style: "11179",
      name: "Black And White Striped Bell Sleeve Top",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "11178",
      name: "Black And White Colorblock Top",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "11177",
      name: "Hi Lo Solid Navy Top/shirt",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "11176",
      name: "Colorblock Top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "11174",
      name: "Off shoulder top with multi color tassaled ruffle sleeves",
      color: "White",
      MRP: "3,595.00"
    },
    {
      style: "11173",
      name: "Bell Sleeve Peasant Top With Yellow Tassales",
      color: "White",
      MRP: "3,295.00"
    },
    {
      style: "11171",
      name: "Half Placket Striped Shirt",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "11170",
      name: "Olive Solid Flap Shirt",
      color: "Olive",
      MRP: "2,595.00"
    },
    {
      style: "11169",
      name: "Satin digital print panel shrug",
      color: "Black",
      MRP: "4,595.00"
    },
    {
      style: "11168",
      name: "Black Crepe Top",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "11164",
      name: "Grey stripe frill shirt",
      color: "Gray",
      MRP: "3,995.00"
    },
    {
      style: "11163",
      name: "Red & white stripe half placket shirt",
      color: "Red",
      MRP: "4,095.00"
    },
    {
      style: "11162",
      name: "Brown Flap shirt",
      color: "Brown",
      MRP: "2,695.00"
    },
    {
      style: "11161",
      name: "Black floral printed shrug",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "11160",
      name: "maroon strpe v neck frill top",
      color: "Maroon",
      MRP: "2,395.00"
    },
    {
      style: "11157",
      name: "Maroon Stripe Top",
      color: "Maroon",
      MRP: "2,595.00"
    },
    {
      style: "11155",
      name: "red stripe cotton v neck top",
      color: "Red",
      MRP: "3,695.00"
    },
    {
      style: "11154",
      name: "pink crepe flap top",
      color: "Pink",
      MRP: "1,995.00"
    },
    {
      style: "11153",
      name: "white tie- dye tunic",
      color: "White",
      MRP: "2,195.00"
    },
    {
      style: "11152",
      name: "Dark Brown With Offwhite Binding",
      color: "Brown",
      MRP: "2,295.00"
    },
    {
      style: "11149",
      name: "White printed v- neck top",
      color: "White",
      MRP: "2,495.00"
    },
    {
      style: "11147",
      name: "Mustard Bell Sleeve Lace Top",
      color: "Yellow",
      MRP: "3,095.00"
    },
    {
      style: "11145",
      name: "Peach georgette dress",
      color: "Peach",
      MRP: "3,195.00"
    },
    {
      style: "11144",
      name: "Solid Georgette Dress",
      color: "Turquoise",
      MRP: "2,995.00"
    },
    {
      style: "11142",
      name: "Red Crepe Ruffle Sleeves Top",
      color: "Red",
      MRP: "2,495.00"
    },
    {
      style: "11141",
      name: "red crepe cold shld top",
      color: "Red",
      MRP: "2,295.00"
    },
    {
      style: "11135",
      name: "White plaid neck tie top",
      color: "White",
      MRP: "2,495.00"
    },
    {
      style: "11127",
      name: "gray multi printed long maxi dress",
      color: "Gray",
      MRP: "2,495.00"
    },
    {
      style: "11126",
      name: "Red Long Maxi Dress, Lurex Binding",
      color: "Red",
      MRP: "3,695.00"
    },
    {
      style: "11121",
      name: "Black Polka Top",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "11118",
      name: "Orange Tie Top",
      color: "Orange",
      MRP: "2,295.00"
    },
    {
      style: "11116",
      name: "Solid Lime Crepe Top",
      color: "Lime Yellow",
      MRP: "2,295.00"
    },
    {
      style: "11114",
      name: "Grey and olive floral tie top",
      color: "Gray",
      MRP: "2,395.00"
    },
    {
      style: "11112",
      name: "Satin Digital Floral print kaftan",
      color: "Black",
      MRP: "3,995.00"
    },
    {
      style: "11110",
      name: "Mustard half plaket tunic",
      color: "Yellow",
      MRP: "2,895.00"
    },
    {
      style: "11109",
      name: "Navy And White Stripe Top",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "11106",
      name: "Gray fleece hoodie",
      color: "Gray",
      MRP: "5,195.00"
    },
    {
      style: "11103",
      name: "Black And White V-neck Top",
      color: "White",
      MRP: "2,395.00"
    },
    {
      style: "11101",
      name: "Navy Floral Gather Neck Top",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "11098",
      name: "Blue printed half placket satin top",
      color: "Blue",
      MRP: "2,595.00"
    },
    {
      style: "11097",
      name: "Jersey Black Dress",
      color: "Black",
      MRP: "5,595.00"
    },
    {
      style: "11090",
      name: "Black jersey cape dress",
      color: "Black",
      MRP: "5,295.00"
    },
    {
      style: "11086",
      name: "Navy-white stripe shirt",
      color: "Navy",
      MRP: "3,095.00"
    },
    {
      style: "11079",
      name: "Navy Stripe Top",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "11067",
      name: "Black animal print placket top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "11065",
      name: "Wine and white floral print box pleated dress",
      color: "Wine",
      MRP: "2,495.00"
    },
    {
      style: "11062",
      name: "marble print panel tunic",
      color: "Yellow",
      MRP: "2,295.00"
    },
    {
      style: "11059",
      name: "purple jaquard V neck with ombre sequins",
      color: "Pink",
      MRP: "2,795.00"
    },
    {
      style: "11057",
      name: "Cherry Red Lace A-linee Dress",
      color: "Red",
      MRP: "3,595.00"
    },
    {
      style: "11050",
      name: "red skater dress",
      color: "Maroon",
      MRP: "2,295.00"
    },
    {
      style: "11047",
      name: "Fit and flare cold shoulder dress",
      color: "Wine",
      MRP: "5,595.00"
    },
    {
      style: "11042",
      name: "Black & White Kaftan Top",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "11036",
      name: "blue stripe chambrey tunic",
      color: "Navy",
      MRP: "3,895.00"
    },
    {
      style: "11033",
      name: "green gingham top with ruffle sleeves",
      color: "Green",
      MRP: "3,595.00"
    },
    {
      style: "11031",
      name: "green gingham top with cold shoulder",
      color: "Green",
      MRP: "3,595.00"
    },
    {
      style: "11029",
      name: "navy floral cold shoulder top, ruffle sleeves",
      color: "Blue",
      MRP: "2,295.00"
    },
    {
      style: "11028",
      name: "Navy Solid Top With White Binding Knot At Sleeves",
      color: "Navy",
      MRP: "2,495.00"
    },
    {
      style: "11026",
      name: "solid tunic with gathers at shoulders and back yoke",
      color: "Turquoise",
      MRP: "2,295.00"
    },
    {
      style: "11019",
      name: "Bottle Green Long Tie, V Neck Top",
      color: "Green",
      MRP: "2,295.00"
    },
    {
      style: "11017",
      name: "blue tiendye half placket tunic",
      color: "Navy",
      MRP: "2,595.00"
    },
    {
      style: "11016",
      name: "grey floral front gather top",
      color: "Gray",
      MRP: "2,795.00"
    },
    {
      style: "11007",
      name: "front gather ruffle sleeves, V neck",
      color: "White",
      MRP: "2,195.00"
    },
    {
      style: "11001",
      name: "Geometric print box pleated dress",
      color: "Multi",
      MRP: "2,295.00"
    },
    {
      style: "10997",
      name: "Black plaid gathered dress",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "10988",
      name: "Black Polka Ruffle Sleeves Top",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "10975",
      name: "Mixed media army print Top",
      color: "Black",
      MRP: "3,895.00"
    },
    {
      style: "10965",
      name: "Gray georgette duster",
      color: "Gray",
      MRP: "1,995.00"
    },
    {
      style: "10957",
      name: "Yellow Floral box pleated dress",
      color: "Yellow",
      MRP: "2,895.00"
    },
    {
      style: "10956",
      name: "Pink Paws box pleated dress",
      color: "Pink",
      MRP: "2,295.00"
    },
    {
      style: "10955",
      name: "Maroon white polka hi lo tunic",
      color: "Maroon",
      MRP: "2,595.00"
    },
    {
      style: "10953",
      name: "Green Floral Box Pleated Dress",
      color: "Green",
      MRP: "3,095.00"
    },
    {
      style: "10940",
      name: "Navy net A line dress",
      color: "Navy",
      MRP: "6,595.00"
    },
    {
      style: "10936",
      name: "Navy & white floral cold shoulder shirt",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "10932",
      name: "black crepe dress wth box pleats",
      color: "Black",
      MRP: "2,195.00"
    },
    {
      style: "10928",
      name: "Cotton half placket tunic",
      color: "White",
      MRP: "2,895.00"
    },
    {
      style: "10926",
      name: "Black Floral Duster",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "10923",
      name: "Cold Shoulder Crepe Top",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "10898",
      name: "Women's Striped Shirt",
      color: "Blue",
      MRP: "2,895.00"
    },
    {
      style: "10892",
      name: "Women's Side Ruffle  top",
      color: "Pink",
      MRP: "3,295.00"
    },
    {
      style: "10880",
      name: "Lurex Duster with Sequins border",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "10876",
      name: "Sleevless Butterfly Duster",
      color: "Pink",
      MRP: "2,395.00"
    },
    {
      style: "10871",
      name: "Black Satin Dress",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "10868",
      name: "Women's Side Tail Tunic",
      color: "Green",
      MRP: "3,295.00"
    },
    {
      style: "10866",
      name: "Women's Side Ruffle Top",
      color: "Navy",
      MRP: "3,295.00"
    },
    {
      style: "10864",
      name: "Women's Sheer Velvet Stripe Duster",
      color: "Olive",
      MRP: "3,095.00"
    },
    {
      style: "10862",
      name: "Satin Embellished Top",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "10840",
      name: "Black Jersey Poncho",
      color: "Black",
      MRP: "4,295.00"
    },
    {
      style: "10835",
      name: "Multi print duster",
      color: "Multi",
      MRP: "2,295.00"
    },
    {
      style: "10834",
      name: "Black floral duster",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "10833",
      name: "Mosscrepe v neck tunic",
      color: "Black",
      MRP: "1,995.00"
    },
    {
      style: "10833",
      name: "Mosscrepe v neck tunic",
      color: "Black",
      MRP: "2,095.00"
    },
    {
      style: "10829",
      name: "Plaid crepe hi lo tunic",
      color: "Black",
      MRP: "3,495.00"
    },
    {
      style: "10827",
      name: "Plaid georgette duster",
      color: "White",
      MRP: "2,295.00"
    },
    {
      style: "10826",
      name: "Floral crepe hi lo tunic",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "10826",
      name: "Floral crepe hi lo tunic",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "10821",
      name: "Floral asymetrical dress",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "10816",
      name: "Solid crepe shirt",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "10811",
      name: "Black Solid Tunic",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "10807",
      name: "Polka Off Shoulder Sheer Tunic",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "10805",
      name: "",
      color: "",
      MRP: "395"
    },
    {
      style: "10804",
      name: "Mix Media Solid Tunic",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "10801",
      name: "Solid Crepe Diagonal Dress",
      color: "Black",
      MRP: "2,895.00"
    },
    {
      style: "10797",
      name: "Floral print shrug",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "10793",
      name: "Hi-lo Black Crepe Top",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "10781",
      name: "Solid tunic V neck sequin",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "10742",
      name: "Embellished Neck Tunic",
      color: "Black",
      MRP: "2,195.00"
    },
    {
      style: "10739",
      name: "Solid crepe V neck tunic",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "10735",
      name: "Pink printed crepe top",
      color: "Pink",
      MRP: "2,295.00"
    },
    {
      style: "10730",
      name: "Floral with border kaftan shrug",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "10730",
      name: "Floral with border kaftan shrug",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "10713",
      name: "Navy mix media tunic",
      color: "Navy",
      MRP: "1,995.00"
    },
    {
      style: "10712",
      name: "White scarf print kaftan top",
      color: "White",
      MRP: "2,395.00"
    },
    {
      style: "10705",
      name: "Mosscrepe floral shrug",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "10705",
      name: "mosscrepe floral shrug",
      color: "Multi",
      MRP: "2,295.00"
    },
    {
      style: "10704",
      name: "Floral printed mosscrepe tunic",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "10703",
      name: "Pink georgette shrug",
      color: "Multi",
      MRP: "2,295.00"
    },
    {
      style: "10702",
      name: "Black mosscrepe tunic",
      color: "Black",
      MRP: "2,195.00"
    },
    {
      style: "10702",
      name: "Black mosscrepe tunic",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "10663",
      name: "Embellished neck Tunic",
      color: "Black",
      MRP: "2,595.00"
    },
    {
      style: "10636",
      name: "Black sheer tunic",
      color: "Black",
      MRP: "1,995.00"
    },
    {
      style: "10634",
      name: "Cotton printed top",
      color: "Beige",
      MRP: "2,595.00"
    },
    {
      style: "10632",
      name: "Cotton Half placket tunic",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "10630",
      name: "Satin kaftan top",
      color: "Multi",
      MRP: "2,795.00"
    },
    {
      style: "10624",
      name: "Sheer Gather top",
      color: "Black",
      MRP: "1,995.00"
    },
    {
      style: "10624",
      name: "Sheer Gather  top",
      color: "Black",
      MRP: "2,095.00"
    },
    {
      style: "10617",
      name: "Stripe Box Pleat Dress",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "10614",
      name: "Gather top",
      color: "White",
      MRP: "2,295.00"
    },
    {
      style: "10613",
      name: "Cotton shirt",
      color: "Mauve",
      MRP: "3,195.00"
    },
    {
      style: "10612",
      name: "Paisely Print Crepe Dress",
      color: "Green",
      MRP: "3,295.00"
    },
    {
      style: "10608",
      name: "Polka Half Placket Tunic",
      color: "Gray",
      MRP: "4,395.00"
    },
    {
      style: "10604",
      name: "Jersey Flared skirt",
      color: "Navy",
      MRP: "4,295.00"
    },
    {
      style: "10600",
      name: "black georgette duster",
      color: "Black",
      MRP: "3,295.00"
    },
    {
      style: "10595",
      name: "Black midi dress",
      color: "Black",
      MRP: "1,995.00"
    },
    {
      style: "10588",
      name: "Paisely print crepe dress",
      color: "Red",
      MRP: "2,995.00"
    },
    {
      style: "10588",
      name: "Paisely Print Crepe Dress",
      color: "Orange",
      MRP: "3,195.00"
    },
    {
      style: "10578",
      name: "Sheer georgette kaftan",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "10577",
      name: "Sheer georgette kaftan",
      color: "Red",
      MRP: "3,495.00"
    },
    {
      style: "10575",
      name: "Cotton jersey shrug",
      color: "Blue",
      MRP: "3,595.00"
    },
    {
      style: "10572",
      name: "Georgette sequence shirt",
      color: "Red",
      MRP: "2,595.00"
    },
    {
      style: "10571",
      name: "Georgette A line dress",
      color: "Black",
      MRP: "2,795.00"
    },
    {
      style: "10553",
      name: "Jersey Burnout Two Button Jacket",
      color: "Blue",
      MRP: "4,595.00"
    },
    {
      style: "10552",
      name: "391",
      color: "Blue",
      MRP: "2,895.00"
    },
    {
      style: "10546",
      name: "Embelished neck Tunic",
      color: "Red",
      MRP: "3,495.00"
    },
    {
      style: "10535",
      name: "Plaid Long sleeves Shirt",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "10533",
      name: "Mixed Media Maxi Dress",
      color: "Black",
      MRP: "2,095.00"
    },
    {
      style: "10512",
      name: "Purple georgette brocade dress",
      color: "Purple",
      MRP: "3,995.00"
    },
    {
      style: "10506",
      name: "Mixed Media Crepe Top",
      color: "Royal Blue",
      MRP: "3,895.00"
    },
    {
      style: "10505",
      name: "Cold Shoulder jersey top",
      color: "Gray",
      MRP: "4,295.00"
    },
    {
      style: "10504",
      name: "Jersey knot top",
      color: "Black",
      MRP: "4,595.00"
    },
    {
      style: "10480",
      name: "Royal blue georgette top",
      color: "Gray",
      MRP: "3,495.00"
    },
    {
      style: "10459",
      name: "Cold Shoulder jersey top",
      color: "Pink",
      MRP: "2,795.00"
    },
    {
      style: "10431",
      name: "pleat Skirt",
      color: "Peach",
      MRP: "2,795.00"
    },
    {
      style: "10320",
      name: "Chambray Shirt",
      color: "Blue",
      MRP: "4,295.00"
    },
    {
      style: "10317",
      name: "Lurex shirt",
      color: "Black",
      MRP: "3,195.00"
    },
    {
      style: "10167",
      name: "Black Satin Dress",
      color: "Black",
      MRP: "2,495.00"
    },
    {
      style: "10054",
      name: "Paisley printed kaftan",
      color: "Green",
      MRP: "2,395.00"
    },
    {
      style: "10025",
      name: "Georgette Dress",
      color: "Pink",
      MRP: "3,395.00"
    },
    {
      style: "18053",
      name: "Green & Navy  V-Neck Kaftan Top",
      color: "Mint Green",
      MRP: "2,495.00"
    },
    {
      style: "18056",
      name: "Navy blue lurex full placket  button shirt dress   Party shirt",
      color: "Navy",
      MRP: "4,195.00"
    },
    {
      style: "18060",
      name: "Maroon Silk  long dress",
      color: "Maroon",
      MRP: "4,295.00"
    },
    {
      style: "18073",
      name: "Pink Polka Dot Summer dress",
      color: "Pink",
      MRP: "3,295.00"
    },
    {
      style: "18074",
      name: "Mint Green Polka Dot dress",
      color: "Mint Green",
      MRP: "3,195.00"
    },
    {
      style: "18076",
      name: "Wine floral summer dress",
      color: "Wine",
      MRP: "3,695.00"
    },
    {
      style: "18077",
      name: "Multi big polka georgette half placket mandarin collar shirt",
      color: "Multi",
      MRP: "2,595.00"
    },
    {
      style: "18080",
      name: "Satin Geometric print Shirt",
      color: "Orange",
      MRP: "2,895.00"
    },
    {
      style: "18081",
      name: "Neon green tropical  print chiffon kaftan",
      color: "Neon Green",
      MRP: "2,395.00"
    },
    {
      style: "18083",
      name: "Off -shoulder ruffle jersey midi dress",
      color: "Mauve",
      MRP: "4,295.00"
    },
    {
      style: "18084",
      name: "Off -shoulder ruffle jersey midi dress",
      color: "Green",
      MRP: "4,295.00"
    },
    {
      style: "18085",
      name: "Off -shoulder ruffle jersey midi dress",
      color: "Orange",
      MRP: "4,295.00"
    },
    {
      style: "18086",
      name: "Off -shoulder ruffle jersey midi dress",
      color: "Olive",
      MRP: "4,295.00"
    },
    {
      style: "18087",
      name: "Tropical print Oversized shirt",
      color: "Green",
      MRP: "2,695.00"
    },
    {
      style: "18088",
      name: "Tropical print shorts",
      color: "Green",
      MRP: "2,095.00"
    },
    {
      style: "18089",
      name: "Tropical print shrug with 3/4 regular sleeves",
      color: "Green",
      MRP: "2,995.00"
    },
    {
      style: "18090",
      name: "chiffon green georgette party dress",
      color: "Green",
      MRP: "5295"
    },
    {
      style: "18091",
      name: "Elegant Navy Georgette party maxi dress",
      color: "Navy",
      MRP: "4395"
    },
    {
      style: "18092",
      name: "Neon Yellow abstract print A-Line dress",
      color: "Neon Yellow",
      MRP: "3495"
    },
    {
      style: "18093",
      name: "Navy and White Big polka georgette V-neck A-line calf-length dress",
      color: "Navy",
      MRP: "3395"
    },
    {
      style: "18094",
      name: "Multi Big polka georgette V-neck A-line calf-length dress",
      color: "Multi",
      MRP: "3395"
    },
    {
      style: "18096",
      name: "Grey cotton slub oversize dress.",
      color: "Gray",
      MRP: "3095"
    },
    {
      style: "18097",
      name: "Beige floral print satin half placket top",
      color: "Beige",
      MRP: "3095"
    },
    {
      style: "18098",
      name: "Beige floral print satin straight pant",
      color: "Beige",
      MRP: "2895"
    },
    {
      style: "18070",
      name: "Black and red polka dots Crop Top",
      color: "Black",
      MRP: "2595"
    },
    {
      style: "18071",
      name: "Black & Red A-Line polka skirt",
      color: "Black",
      MRP: "2395"
    },
    {
      style: "18078",
      name: "Black and brown abstract print v-neck top",
      color: "Black",
      MRP: "2595"
    },
    {
      style: "18079",
      name: "Black and brown abstract print full elasticated pants",
      color: "Black",
      MRP: "2895"
    },
    {
      style: "18099",
      name: "Ivory-colored net V-neck top",
      color: "Ivory",
      MRP: "2795"
    },
    {
      style: "19002",
      name: "Black and red floral A-line dress",
      color: "Black",
      MRP: "3195"
    },
    {
      style: "19003",
      name: "Brown and white big polka A-line dress",
      color: "Brown",
      MRP: "2695"
    },
    {
      style: "19004",
      name: "Pink Lycra A-line  midi dress",
      color: "Pink",
      MRP: "3595"
    },
    {
      style: "19005",
      name: "Printed Rayon half-placket mandarin collar calf-length oversized dress",
      color: "Multi",
      MRP: "3595"
    },
    {
      style: "18095",
      name: "Printed Rayon half-placket mandarin collar calf-length dress",
      color: "Peach",
      MRP: "3395"
    },
    {
      style: "19006",
      name: "Green & White stripe half-placket mandarin collar calf-length oversized dress",
      color: "Green",
      MRP: "2695"
    },
    {
      style: "19007",
      name: "Solid Cotton Slub  V-neck top with regular sleeves.",
      color: "Turquoise",
      MRP: "2695"
    },
    {
      style: "19008",
      name: "Solid Cotton Slub trousers with a full elastic waistband",
      color: "Turquoise",
      MRP: "2495"
    },
    {
      style: "19009",
      name: "Solid Cotton Slub  V-neck top with regular sleeves.",
      color: "Ivory",
      MRP: "2695"
    },
    {
      style: "19010",
      name: "Solid Cotton Slub trousers with a full elastic waistband",
      color: "Ivory",
      MRP: "2495"
    },
    {
      style: "19011",
      name: "Solid Cotton Slub  V-neck top with regular sleeves.",
      color: "Black",
      MRP: "3095"
    },
    {
      style: "19012",
      name: "Solid Cotton Slub trousers with a full elastic waistband",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19000",
      name: "Gray Cotton Slub shirt with asequins half placket mandarin collar",
      color: "Gray",
      MRP: "3095"
    },
    {
      style: "19001",
      name: "Gray Cotton Slub pant.",
      color: "Gray",
      MRP: "2495"
    },
    {
      style: "19014",
      name: "Blue and rust floral printed A-line summery dress",
      color: "Blue",
      MRP: "3595"
    },
    {
      style: "19013",
      name: "Blue and Rust floral below knee length kaftan dress",
      color: "Blue",
      MRP: "2595"
    },
    {
      style: "19015",
      name: "Peach floral half-placket mandarin collar top",
      color: "Peach",
      MRP: "3395"
    },
    {
      style: "19016",
      name: "Yellow floral printed A-Line dress",
      color: "Yellow",
      MRP: "3195"
    },
    {
      style: "19017",
      name: "Ivory and black printed rayon half placket mandarin collar shirt",
      color: "Ivory",
      MRP: "2895"
    },
    {
      style: "19018",
      name: "Magenta Floral Georgette Wrap Around  dress.",
      color: "Magenta",
      MRP: "3495"
    },
    {
      style: "19019",
      name: "Ivory and black Printed Rayon shirt.",
      color: "Ivory",
      MRP: "2795"
    },
    {
      style: "19020",
      name: "Red and White floral print half-placket mandarin collar shirt",
      color: "Red",
      MRP: "2695"
    },
    {
      style: "19022",
      name: "Stylish Mint green floral Print dress",
      color: "Mint Green",
      MRP: "2795"
    },
    {
      style: "19034",
      name: "Navy Blue French Crepe Top with Sequin Embellishment",
      color: "Navy",
      MRP: "3295"
    },
    {
      style: "19035",
      name: "Sky Blue french crepe silk Shirt with Sequin Embellishment",
      color: "Sky blue",
      MRP: "3295"
    },
    {
      style: "19036",
      name: "Turquoise Blue kaftan with sequin border yoke",
      color: "Turquoise",
      MRP: "3295"
    },
    {
      style: "19023",
      name: "Wine solid Georgette  A-line dress",
      color: "Wine",
      MRP: "3695"
    },
    {
      style: "19024",
      name: "Solid Red Rib A-line dress",
      color: "Red",
      MRP: "4295"
    },
    {
      style: "19026",
      name: "Turquoise Blue cotton slub oversize dress",
      color: "Turquoise",
      MRP: "4195"
    },
    {
      style: "19027",
      name: "Navy and white big polka A-line dress",
      color: "Navy",
      MRP: "2595"
    },
    {
      style: "19028",
      name: "Green and Black polka half placket mandarin collar shirt",
      color: "Green",
      MRP: "2495"
    },
    {
      style: "19030",
      name: "Multi colour geometric print Crepe Shirt",
      color: "Multi",
      MRP: "2595"
    },
    {
      style: "19031",
      name: "Olive & Ivory half placket mandarin collar shirt",
      color: "Olive",
      MRP: "2495"
    },
    {
      style: "19032",
      name: "Tropical print shrug",
      color: "Multi",
      MRP: "2495"
    },
    {
      style: "19033",
      name: "Tropical print elastic waist comfortable pants",
      color: "Multi",
      MRP: "2495"
    },
    {
      style: "19029",
      name: "Green rayon A-line ruffle midi dress",
      color: "Green",
      MRP: "3295"
    },
    {
      style: "19037",
      name: "Black and white cow print  half placket mandarin collar shirt",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19038",
      name: "Black and white cow print shrug",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19040",
      name: "Black and white leopard print half placket  mandarin collar shirt",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19043",
      name: "Navy and white  print shirt half placket and mandarin collar.",
      color: "Navy",
      MRP: "2695"
    },
    {
      style: "19044",
      name: "Black paisely  half placket  mandarin collar shirt",
      color: "Black",
      MRP: "2795"
    },
    {
      style: "19045",
      name: "Navy and white  printed shirt half placket and mandarin collar.",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19046",
      name: "Grey georgette with black sequins party dress",
      color: "Gray",
      MRP: "3695"
    },
    {
      style: "19051",
      name: "Solid pink dress  V-neck black sequin dress.",
      color: "Pink",
      MRP: "3795"
    },
    {
      style: "19047",
      name: "V-shape hemline color block Kimono top",
      color: "Gray",
      MRP: "2395"
    },
    {
      style: "19048",
      name: "V-Shape Hemline Color Block Kimono Sleeves Top",
      color: "Gray",
      MRP: "2395"
    },
    {
      style: "19049",
      name: "V-Shape Hemline Color Block Kimono Sleeves Top",
      color: "Blue",
      MRP: "2395"
    },
    {
      style: "19041",
      name: "Navy and white geometric colorblock shirt.",
      color: "Navy",
      MRP: "2895"
    },
    {
      style: "19050",
      name: "V-Shape Hemline Color Block Kimono Sleeves Top",
      color: "Black",
      MRP: "2295"
    },
    {
      style: "19052",
      name: "Solid Navy  & contrast printed wrap around top",
      color: "Navy",
      MRP: "2395"
    },
    {
      style: "19053",
      name: "Solid black and printed color blocking wrap around top",
      color: "Black",
      MRP: "2595"
    },
    {
      style: "19054",
      name: "V-Shape Hemline Color Block Kimono Sleeves Top",
      color: "Blue",
      MRP: "2495"
    },
    {
      style: "19055",
      name: "Red and White Checks Color Block Kimono Sleeves Top",
      color: "Red",
      MRP: "2495"
    },
    {
      style: "19056",
      name: "Orange georgette fit and flared party dress with sequins embelishment",
      color: "Orange",
      MRP: "4295"
    },
    {
      style: "19057",
      name: "Multi big polka georgette V-neck A-line calf-length dress",
      color: "Black",
      MRP: "3495"
    },
    {
      style: "19039",
      name: "Black and Mustard colorblock shirt with 3/4 sleeves",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19060",
      name: "Navy and white floral below knee length kaftan dress",
      color: "Navy",
      MRP: "2495"
    },
    {
      style: "19021",
      name: "Black & White printed crepe shirt",
      color: "Black",
      MRP: "2595"
    },
    {
      style: "19061",
      name: "Turquoise blue floral print shrug",
      color: "Turquoise",
      MRP: "2495"
    },
    {
      style: "19058",
      name: "Women's high-low banded collar top with printed patch pocket",
      color: "Black",
      MRP: "2295"
    },
    {
      style: "19062",
      name: "Turquoise blue floral print elastic waist pants",
      color: "Turquoise",
      MRP: "2495"
    },
    {
      style: "19059",
      name: "Navy blue banded collar with printed placket top",
      color: "Navy",
      MRP: "2195"
    },
    {
      style: "19063",
      name: "Pink and White Big polka half placket mandarin collar shirt",
      color: "Pink",
      MRP: "2695"
    },
    {
      style: "19064",
      name: "Black banded collar with printed placket top",
      color: "Black",
      MRP: "2295"
    },
    {
      style: "19065",
      name: "Heart printed A-line slit dress with puffed sleeves",
      color: "Black",
      MRP: "2795"
    },
    {
      style: "19068",
      name: "Solid Yellow half-placket mandarin collar shirt",
      color: "Yellow",
      MRP: "2995"
    },
    {
      style: "19066",
      name: "Black slit dress with sequin embellishment",
      color: "Black",
      MRP: "3295"
    },
    {
      style: "19069",
      name: "Solid Mint green half-placket mandarin collar shirt",
      color: "Mint Green",
      MRP: "2995"
    },
    {
      style: "19070",
      name: "Orange and white zebra print crop top with side drawstrings",
      color: "Orange",
      MRP: "2095"
    },
    {
      style: "19071",
      name: "Black and Multi colorblock shirt with 3/4 sleeves.",
      color: "Black",
      MRP: "2795"
    },
    {
      style: "19067",
      name: "Heart Print Tie-Up Neck Top with Long Bell Sleeves",
      color: "Black",
      MRP: "2595"
    },
    {
      style: "19072",
      name: "Solid Peach half-placket mandarin collar shirt",
      color: "Peach",
      MRP: "2995"
    },
    {
      style: "19076",
      name: "Classic Stripes Tie-Up Neck Top with Long Bell Sleeves",
      color: "Blue",
      MRP: "2595"
    },
    {
      style: "19077",
      name: "Stripes Printed Tie-Up Neck Top with Long Bell Sleeves",
      color: "Red",
      MRP: "2595"
    },
    {
      style: "19078",
      name: "Blue Stripes Tie-Up Neck Top with Long Bell Sleeves",
      color: "Blue",
      MRP: "2495"
    },
    {
      style: "19079",
      name: "Black stripes tie-up neck oversized dress",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19080",
      name: "Zebra print tie-up neck oversized dress",
      color: "Orange",
      MRP: "2495"
    },
    {
      style: "19081",
      name: "Polka dot tie-up neck oversized dress",
      color: "Blue",
      MRP: "2595"
    },
    {
      style: "19074",
      name: "Animal print A-line Dress With Bell Sleeves",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19075",
      name: "Animal print A-line Dress With Bell Sleeves",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19082",
      name: "Black slit dress with animal print patch work",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19083",
      name: "Floral print peter pan collar top with puffed sleeves",
      color: "Blue",
      MRP: "2495"
    },
    {
      style: "19084",
      name: "Solid black peter pan collar top with puffed sleeves",
      color: "Black",
      MRP: "2295"
    },
    {
      style: "19042",
      name: "Rust and Navy stripes shirt with 3/4 sleeves.",
      color: "Rust",
      MRP: "2995"
    },
    {
      style: "19073",
      name: "Black & Ivory leopard print mandarin collar top",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19085",
      name: "Sparkle A-line Block Dress",
      color: "White",
      MRP: "2795"
    },
    {
      style: "19086",
      name: "A-line dress with tie knot collar",
      color: "Brown",
      MRP: "2695"
    },
    {
      style: "19087",
      name: "A-line dress with printed tie knot collar",
      color: "Black",
      MRP: "2395"
    },
    {
      style: "19088",
      name: "A-line dress with printed tie knot collar",
      color: "Black",
      MRP: "2395"
    },
    {
      style: "19089",
      name: "Striped drop-shoulder top with a wide collar",
      color: "Red",
      MRP: "2495"
    },
    {
      style: "19090",
      name: "Striped drop-shoulder top with a wide collar",
      color: "Yellow",
      MRP: "2295"
    },
    {
      style: "19091",
      name: "V-Neck Vertical Stripe Top",
      color: "Multi",
      MRP: "2495"
    },
    {
      style: "19092",
      name: "Elegant Turquoise blue Georgette party Maxi dress",
      color: "Turquoise",
      MRP: "3795"
    },
    {
      style: "19093",
      name: "Sequins embelished Turquoise blue Georgette party  dress",
      color: "Turquoise",
      MRP: "4395"
    },
    {
      style: "19094",
      name: "Sequins Yoke  party Maxi dress",
      color: "Gray",
      MRP: "4695"
    },
    {
      style: "19095",
      name: "Gray Georgette  A-Line swing party dress",
      color: "Gray",
      MRP: "4295"
    },
    {
      style: "19096",
      name: "Festive Burgundy  georgette Lurex shrug",
      color: "Burgundy",
      MRP: "3395"
    },
    {
      style: "19097",
      name: "Red georgette festive party shrug",
      color: "Red",
      MRP: "3395"
    },
    {
      style: "19098",
      name: "Sequins yoke  Green georgette party Maxi dress",
      color: "Green",
      MRP: "4995"
    },
    {
      style: "19099",
      name: "Sequins Yoke Wine  party Maxi dress",
      color: "Wine",
      MRP: "4995"
    },
    {
      style: "19100",
      name: "Caramel French crepe Sequins collar Shirt",
      color: "Caramel",
      MRP: "3895"
    },
    {
      style: "19101",
      name: "Green Silk Sequins Yoke Party Maxi Dress",
      color: "Green",
      MRP: "4795"
    },
    {
      style: "19102",
      name: "Lavender Sequins Yoke party Maxi dress",
      color: "Lavender",
      MRP: "4295"
    },
    {
      style: "19103",
      name: "Festive party Lavender  silk half placket shirt",
      color: "Lavender",
      MRP: "3295"
    },
    {
      style: "19104",
      name: "Turquoise georgette Elegant party Maxi dress",
      color: "Turquoise",
      MRP: "3495"
    },
    {
      style: "19105",
      name: "Turquoise Georgette A-Line swing party dress",
      color: "Turquoise",
      MRP: "3195"
    },
    {
      style: "19106",
      name: "Pink shimmery georette embelished party shrug",
      color: "Pink",
      MRP: "2995"
    },
    {
      style: "19107",
      name: "Black  georgette Silver Lurex Party shrug",
      color: "Black",
      MRP: "3395"
    },
    {
      style: "19108",
      name: "Burgundy georgette Silver Lurex Party shrug",
      color: "Burgundy",
      MRP: "3195"
    },
    {
      style: "19109",
      name: "Sequins Embellished Party Shirt",
      color: "Gray",
      MRP: "3995"
    },
    {
      style: "19110",
      name: "Sequin V-Neck A-Line Dress with Net Sleeves",
      color: "Black",
      MRP: "3095"
    },
    {
      style: "19111",
      name: "Caramel silk crepe Sequins embelished Shirt",
      color: "Caramel",
      MRP: "3795"
    },
    {
      style: "19113",
      name: "Sea green silk crepeparty shirt",
      color: "Mint Green",
      MRP: "3795"
    },
    {
      style: "19115",
      name: "Yellow shimmery georette embelished party shrug",
      color: "Yellow",
      MRP: "2995"
    },
    {
      style: "19118",
      name: "Black and white color blocking full placket shirt",
      color: "Black",
      MRP: "2195"
    },
    {
      style: "19119",
      name: "Multi Abstract print half placket  maindarin collar shirt",
      color: "Multi",
      MRP: "2995"
    },
    {
      style: "19120",
      name: "Sequins Embelished  silk shirt with V-neck collar",
      color: "Peach",
      MRP: "4495"
    },
    {
      style: "19136",
      name: "Coffee Brown Long Coat with Side Pockets",
      color: "Brown",
      MRP: "3895"
    },
    {
      style: "19121",
      name: "Silk half placket maindarin collar shirt.",
      color: "Yellow",
      MRP: "3895"
    },
    {
      style: "19137",
      name: "Solid Wine Long Coat with Side Pockets",
      color: "Wine",
      MRP: "3895"
    },
    {
      style: "19122",
      name: "Silk half placket maindarin collar shirt.",
      color: "Peach",
      MRP: "3895"
    },
    {
      style: "19123",
      name: "Silk half placket Mandarin collar shirt",
      color: "Beige",
      MRP: "3795"
    },
    {
      style: "19124",
      name: "Half Leopard Print & half solid black Shirt",
      color: "Black",
      MRP: "2795"
    },
    {
      style: "19138",
      name: "Long Jacket With Printed Hoddie",
      color: "Black",
      MRP: "3595"
    },
    {
      style: "19125",
      name: "Brown and white big polka dot shirt",
      color: "Brown",
      MRP: "2695"
    },
    {
      style: "19139",
      name: "Yellow long jacket with printed hoodie",
      color: "Yellow",
      MRP: "3495"
    },
    {
      style: "19126",
      name: "Rust half placket maindarin collar shirt",
      color: "Rust",
      MRP: "2595"
    },
    {
      style: "19127",
      name: "Silk crepe half placket maindarin collar shirt",
      color: "Peach",
      MRP: "3095"
    },
    {
      style: "19128",
      name: "Solid Green crepe half placket maindarin collar shirt",
      color: "Green",
      MRP: "2595"
    },
    {
      style: "19129",
      name: "Black and yellow leopard print half placket mandarin collar shirt",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19140",
      name: "Beige Teddy Jacket With Leather Collar",
      color: "Beige",
      MRP: "4395"
    },
    {
      style: "19130",
      name: "Solid Black shirt with leopard print collar & placket",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19131",
      name: "Solid wine half placket mandarin collar shirt",
      color: "Wine",
      MRP: "2695"
    },
    {
      style: "19141",
      name: "Green long jacket with leather collar",
      color: "Green",
      MRP: "3695"
    },
    {
      style: "19142",
      name: "Red jacket with spread fur collar",
      color: "Red",
      MRP: "3495"
    },
    {
      style: "19112",
      name: "Yellow Silk Shirt embelished with sequins cuff",
      color: "Yellow",
      MRP: "4695"
    },
    {
      style: "19143",
      name: "Black jacket with spread fur collar",
      color: "Black",
      MRP: "4395"
    },
    {
      style: "19144",
      name: "Green long coat with black fur collar",
      color: "Green",
      MRP: "3695"
    },
    {
      style: "19114",
      name: "Silk shirt featuring a classic collar shirt",
      color: "Beige",
      MRP: "4395"
    },
    {
      style: "19145",
      name: "Grey long coat with black fur collar",
      color: "Gray",
      MRP: "3795"
    },
    {
      style: "19146",
      name: "Black jacket with printed hoodie",
      color: "Black",
      MRP: "3495"
    },
    {
      style: "19147",
      name: "Black jacket with fur hoodie",
      color: "Black",
      MRP: "3895"
    },
    {
      style: "19148",
      name: "Chain Print half-placket shirt with full sleeves and cuffs",
      color: "Black",
      MRP: "2795"
    },
    {
      style: "19149",
      name: "Navy and green floral colorblock shirt.",
      color: "Navy",
      MRP: "2895"
    },
    {
      style: "19150",
      name: "Red and white striped V-neck top",
      color: "Red",
      MRP: "2495"
    },
    {
      style: "19151",
      name: "Blue and white striped V-neck top",
      color: "Blue",
      MRP: "2495"
    },
    {
      style: "19152",
      name: "Color-block winter midi dress",
      color: "Gray",
      MRP: "3495"
    },
    {
      style: "19153",
      name: "Color-block winter midi dress",
      color: "Blue",
      MRP: "3495"
    },
    {
      style: "19154",
      name: "Black long coat with printed fur collar",
      color: "Black",
      MRP: "4595"
    },
    {
      style: "19155",
      name: "Black fleece long jacket with printed collar",
      color: "Black",
      MRP: "3695"
    },
    {
      style: "19156",
      name: "Yellow half placket collared shirt",
      color: "Yellow",
      MRP: "2595"
    },
    {
      style: "19157",
      name: "Color-block oversized dress with belt",
      color: "Black",
      MRP: "3095"
    },
    {
      style: "19158",
      name: "V-shape hemline color block Kimono top",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19159",
      name: "Navy Blue plaid mandarin collar shirt",
      color: "Navy",
      MRP: "2695"
    },
    {
      style: "19160",
      name: "V-neck black striped top",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19161",
      name: "Baby pink fleece long jacket",
      color: "Pink",
      MRP: "3995"
    },
    {
      style: "19164",
      name: "Grey collared coat",
      color: "Gray",
      MRP: "3695"
    },
    {
      style: "19166",
      name: "Red slit dress with sequin embellishment",
      color: "Red",
      MRP: "2995"
    },
    {
      style: "19167",
      name: "Elegant Black georgette party Maxi dress.",
      color: "Black",
      MRP: "4095"
    },
    {
      style: "19169",
      name: "Pink slit dress with sequin embellishment",
      color: "Pink",
      MRP: "2895"
    },
    {
      style: "19168",
      name: "Elegant Fucia georgette  party Maxi dress",
      color: "Fucia",
      MRP: "3895"
    },
    {
      style: "19116",
      name: "Silk shirt featuring a classic collar,",
      color: "Peach",
      MRP: "3995"
    },
    {
      style: "19170",
      name: "Silk  classic party wear  collar shirt",
      color: "Olive",
      MRP: "3495"
    },
    {
      style: "19171",
      name: "Navy and white Check print shrug features 3/4 regular sleeves",
      color: "Navy",
      MRP: "2395"
    },
    {
      style: "19172",
      name: "Yellow solid with owl print patch pocket and back yoke shirt collar shirt",
      color: "Yellow",
      MRP: "2495"
    },
    {
      style: "19173",
      name: "Orange  Elegant party Maxi dress",
      color: "Orange",
      MRP: "5495"
    },
    {
      style: "19174",
      name: "Orange georgette A-Line swing dress with ombre sequins",
      color: "Orange",
      MRP: "4095"
    },
    {
      style: "19175",
      name: "Silk classic collar shirt featuring V-neck,",
      color: "Gray",
      MRP: "3895"
    },
    {
      style: "19162",
      name: "Green floral net  V-Neck top.",
      color: "Green",
      MRP: "2995"
    },
    {
      style: "19163",
      name: "Lavender floral net  V-Neck top.",
      color: "Lavender",
      MRP: "2995"
    },
    {
      style: "19165",
      name: "Beige collared coat",
      color: "Beige",
      MRP: "4195"
    },
    {
      style: "19202",
      name: "Coral Silk Kaftan",
      color: "Coral",
      MRP: "4595"
    },
    {
      style: "19203",
      name: "Purple Silk Kaftan",
      color: "Purple",
      MRP: "4595"
    },
    {
      style: "19204",
      name: "Magenta Silk Dress",
      color: "Magenta",
      MRP: "4395"
    },
    {
      style: "19205",
      name: "Navy Silk Shirt",
      color: "Navy",
      MRP: "3295"
    },
    {
      style: "19206",
      name: "Yellow Silk Kaftan",
      color: "Yellow",
      MRP: "4295"
    },
    {
      style: "19207",
      name: "Burgundy Georgette Kaftan",
      color: "Burgundy",
      MRP: "3495"
    },
    {
      style: "19208",
      name: "Olive Silk Dress",
      color: "Olive",
      MRP: "3695"
    },
    {
      style: "19209",
      name: "Bodycon dress with sequin shoulder patch",
      color: "Blue",
      MRP: "3095"
    },
    {
      style: "19210",
      name: "Black bodycon dress with Foil print ruffles",
      color: "Black",
      MRP: "2995"
    },
    {
      style: "19211",
      name: "One shoulder bodycon party dress",
      color: "Maroon",
      MRP: "4895"
    },
    {
      style: "19212",
      name: "Halter neck bodycon dress",
      color: "Sea Green",
      MRP: "2495"
    },
    {
      style: "19213",
      name: "Black halter neck bodycon dress",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19214",
      name: "Blue fit and flare velvet dress",
      color: "Navy Blue",
      MRP: "5095"
    },
    {
      style: "19215",
      name: "Halter neck bodycon dress",
      color: "Lavender",
      MRP: "2495"
    },
    {
      style: "19216",
      name: "Bodycon dress with shoulder sequin patch",
      color: "Red",
      MRP: "3095"
    },
    {
      style: "19217",
      name: "Red bodycon frill dress",
      color: "Red",
      MRP: "2895"
    },
    {
      style: "19218",
      name: "One shoulder bodycon dress",
      color: "Navy Blue",
      MRP: "4895"
    },
    {
      style: "19219",
      name: "Off-shoulder bodycon dress with sequin sleeves",
      color: "Black",
      MRP: "5095"
    },
    {
      style: "19220",
      name: "Black bodycon dress with back sequin strap",
      color: "Black",
      MRP: "2895"
    },
    {
      style: "19221",
      name: "Black bodycon dress with net sleeves",
      color: "Black",
      MRP: "2895"
    },
    {
      style: "19222",
      name: "Black bodycon dress with sequin embellishment",
      color: "Black",
      MRP: "3995"
    },
    {
      style: "19223",
      name: "Off-shoulder black bodycon dress",
      color: "Black",
      MRP: "4095"
    },
    {
      style: "19224",
      name: "Color-block oversized dress with belt",
      color: "Black",
      MRP: "2995"
    },
    {
      style: "19225",
      name: "Black bodycon dress with lantern sleeves",
      color: "Black",
      MRP: "2995"
    },
    {
      style: "19226",
      name: "Black top with lantern sleeves",
      color: "Black",
      MRP: "2795"
    },
    {
      style: "19227",
      name: "Color-block animal print shirt",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19228",
      name: "V-neck color-block dress",
      color: "Black",
      MRP: "2495"
    },
    {
      style: "19229",
      name: "Color-block zipper hoodie",
      color: "Gray",
      MRP: "3695"
    },
    {
      style: "19230",
      name: "Sequin neckline black bodycon dress",
      color: "Black",
      MRP: "4295"
    },
    {
      style: "19231",
      name: "Velvet bodycon dress with back sequin tie-knot",
      color: "Maroon",
      MRP: "6295"
    },
    {
      style: "19232",
      name: "Black bodycon dress with puff sleeves",
      color: "Black",
      MRP: "3095"
    },
    {
      style: "19233",
      name: "Black bodycon dress sequin tie",
      color: "Black",
      MRP: "3295"
    },
    {
      style: "19234",
      name: "Off-shoulder velvet dress",
      color: "Maroon",
      MRP: "4395"
    },
    {
      style: "19235",
      name: "Velvet off-shoulder dress",
      color: "Blue",
      MRP: "4395"
    },
    {
      style: "19236",
      name: "Red bodycon dress with sequin tail",
      color: "Red",
      MRP: "3095"
    },
    {
      style: "19237",
      name: "Velvet bodycon dress with back sequin tie-knot",
      color: "Blue",
      MRP: "6295"
    },
    {
      style: "19238",
      name: "Black fleece coat with printed collar",
      color: "Black",
      MRP: "3995"
    },
    {
      style: "19239",
      name: "Brown fleece blazer with white notch collar",
      color: "Brown",
      MRP: "3795"
    },
    {
      style: "19240",
      name: "Blue velvet party blazer",
      color: "Blue",
      MRP: "6095"
    },
    {
      style: "19241",
      name: "Maroon velvet party blazer",
      color: "Maroon",
      MRP: "6095"
    },
    {
      style: "19242",
      name: "Maroon velvet long evening dress",
      color: "Maroon",
      MRP: "5795"
    },
    {
      style: "19243",
      name: "",
      color: "Black",
      MRP: "3495"
    },
    {
      style: "19244",
      name: "",
      color: "Black",
      MRP: "4895"
    },
    {
      style: "19250",
      name: "Side slit fitted skirt",
      color: "Sea Green",
      MRP: "2495"
    },
    {
      style: "19251",
      name: "Half zipper black sweatshirt",
      color: "Black",
      MRP: "3595"
    },
    {
      style: "19252",
      name: "Half zipper beige sweatshirt",
      color: "Beige",
      MRP: "3595"
    },
    {
      style: "19253",
      name: "Half zipper green sweatshirt",
      color: "Green",
      MRP: "3595"
    },
    {
      style: "19254",
      name: "Half zipper pink sweatshirt",
      color: "Pink",
      MRP: "3595"
    },
    {
      style: "19245",
      name: "",
      color: "Black",
      MRP: "4495"
    },
    {
      style: "19246",
      name: "",
      color: "Royal Blue",
      MRP: "2995"
    },
    {
      style: "19247",
      name: "",
      color: "Black",
      MRP: "2895"
    },
    {
      style: "19248",
      name: "",
      color: "Black",
      MRP: "3395"
    },
    {
      style: "19249",
      name: "",
      color: "Brown",
      MRP: "2495"
    },
    {
      style: "19255",
      name: "",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19256",
      name: "Satin printed Tie-Up Neck Top",
      color: "Peach",
      MRP: "2395"
    },
    {
      style: "19257",
      name: "Half placket shirt",
      color: "Purple",
      MRP: "3095"
    },
    {
      style: "19258",
      name: "Half placket shirt",
      color: "Royal Blue",
      MRP: "3095"
    },
    {
      style: "19259",
      name: "Half placket shirt",
      color: "Olive",
      MRP: "3095"
    },
    {
      style: "19260",
      name: "Bodycon dress with sequin shoulder patch",
      color: "Black",
      MRP: "3295"
    },
    {
      style: "19262",
      name: "",
      color: "Purple",
      MRP: "4095"
    },
    {
      style: "19261",
      name: "",
      color: "Black",
      MRP: "2595"
    },
    {
      style: "19263",
      name: "Cotton blue regular shirt",
      color: "Blue",
      MRP: "2695"
    },
    {
      style: "19264",
      name: "Magenta Cotton Regular shirt",
      color: "Magenta",
      MRP: "2795"
    },
    {
      style: "19265",
      name: "Orange cotton regular shirt",
      color: "Orange",
      MRP: "2795"
    },
    {
      style: "19266",
      name: "Turquoise cotton regular shirt",
      color: "Turquoise",
      MRP: "2795"
    },
    {
      style: "19267",
      name: "Black cotton regular shirt",
      color: "Black",
      MRP: "2695"
    },
    {
      style: "19268",
      name: "Brown cotton regular shirt",
      color: "Brown",
      MRP: "2795"
    },
    {
      style: "19176",
      name: "Solid black fleece long jacket",
      color: "Black",
      MRP: "3,395.00"
    },
    {
      style: "19177",
      name: "Black georgette kaftan shirt",
      color: "Black",
      MRP: "3,095.00"
    },
    {
      style: "19178",
      name: "Black Polka Top",
      color: "Black",
      MRP: "2,395.00"
    },
    {
      style: "19179",
      name: "Floral Long Dress",
      color: "Black",
      MRP: "2,695.00"
    },
    {
      style: "19180",
      name: "Red silk half placket top",
      color: "Red",
      MRP: "4,095.00"
    },
    {
      style: "19181",
      name: "Neon Yellow abstract print A-Line dress",
      color: "Neon Yellow",
      MRP: "3495"
    },
    {
      style: "19182",
      name: "Black and White colorblock stripe shirt",
      color: "Black",
      MRP: "2,995.00"
    },
    {
      style: "19183",
      name: "Pink Paisely  Mandrain collar Shirt",
      color: "Pink",
      MRP: "2,795.00"
    },
    {
      style: "19184",
      name: "Solid light gray fleece long jacket",
      color: "Gray",
      MRP: "6,395.00"
    },
    {
      style: "19185",
      name: "White and Black polka georgette half placket shirt",
      color: "White",
      MRP: "3,095.00"
    },
    {
      style: "19186",
      name: "Purple half placket top",
      color: "Purple",
      MRP: "2,595.00"
    },
    {
      style: "19187",
      name: "Orange Tie Top",
      color: "Orange",
      MRP: "2,295.00"
    },
    {
      style: "19188",
      name: "Black Top With Mesh On Bell Sleeves",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "19189",
      name: "Red Tropical print Shirt",
      color: "Red",
      MRP: "2,795.00"
    },
    {
      style: "19190",
      name: "Navy blue  Top With stylish Mesh  Bell Sleeves",
      color: "Navy",
      MRP: "2,595.00"
    },
    {
      style: "19191",
      name: "Red sequins party maxi dress",
      color: "Red",
      MRP: "3,095.00"
    },
    {
      style: "19192",
      name: "Magenta solid jersey off-shoulder calf-length dress",
      color: "Magenta",
      MRP: "4,195.00"
    },
    {
      style: "19193",
      name: "Navy Floral Gather Neck Top",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "19194",
      name: "Mustard Kaftan",
      color: "Yellow",
      MRP: "2,795.00"
    },
    {
      style: "19195",
      name: "Bell Sleeve Black Polka Top",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "19196",
      name: "Navy Blue Top",
      color: "Navy",
      MRP: "2,295.00"
    },
    {
      style: "19197",
      name: "Qurvii Women Maroon silk party top with v-neck and bell sleeves,",
      color: "Maroon",
      MRP: "3,595.00"
    },
    {
      style: "19198",
      name: "Black & White Kaftan Top",
      color: "Black",
      MRP: "2,295.00"
    },
    {
      style: "19199",
      name: "Royal blue collar half placket shirt",
      color: "Blue",
      MRP: "3,495.00"
    },
    {
      style: "19200",
      name: "Burgundy Polka Swing Top",
      color: "Burgundy",
      MRP: "2,295.00"
    },
    {
      style: "24046",
      name: "Orange  & saffron silk Kimono oversize dress",
      color: "Orange",
      MRP: "4,095.00"
    },
    {
      style: "24047",
      name: "Black crepe silk Kimono dress with sequins",
      color: "Black",
      MRP: "4,495.00"
    },
    {
      style: "24048",
      name: "Fuchia pink & orange silk colorblock Kimono dress",
      color: "Fuchia Pink",
      MRP: "4,095.00"
    },
    {
      style: "19201",
      name: "Black And White Colorblock Top",
      color: "Black",
      MRP: "2,395.00"
    }
  ]
  
 
  

// Function to load inventory from localStorage
function loadInventory() {
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const inventoryList = document.getElementById('inventory-list').getElementsByTagName('tbody')[0];
    inventoryList.innerHTML = ''; // Clear existing rows
  
    inventory.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.size}</td>
        <td>${item.quantity}</td>
        <td>${item.color}</td>
        <td><button class="delete" onclick="deleteItem(${index})">Delete</button></td>
      `;
      inventoryList.appendChild(row);
    });
  }
  
  // Function to add an item to the inventory
  document.getElementById('add-item').addEventListener('click', () => {
    const name = document.getElementById('item-name').value;
    const quantity = parseInt(document.getElementById('item-quantity').value, 10);
    const color =document.getElementById('item-color').value;
    const size = document.getElementById('item-size').value;
  
    if (name && !isNaN(quantity)) {
      const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
      inventory.push({ name,size, quantity, color });
  
      // Save the updated inventory to localStorage
      localStorage.setItem('inventory', JSON.stringify(inventory));
  
      // Clear input fields
      document.getElementById('item-name').value = '';
      document.getElementById('item-quantity').value = '';
      document.getElementById('item-color').value = '';
      document.getElementById('item-size').value="";
  
      // Reload inventory list
      loadInventory();
    } else {
      alert('Please fill in all fields with valid values.');
    }
  });
  
  // Function to delete an item from the inventory
  function deleteItem(index) {
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    inventory.splice(index, 1);
  
    // Save the updated inventory to localStorage
    localStorage.setItem('inventory', JSON.stringify(inventory));
  
    // Reload inventory list
    loadInventory();
  }


  
   
  



  
  // Function to download inventory as CSV
  function downloadCSV() {
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
  
    if (inventory.length === 0) {
      alert('No inventory data to download');
      return;
    }
  
    const csvRows = [];
    // Create header row
    // csvRows.push(['Style number', 'Quantity', 'Color']);
    csvRows.push(["Barcode","Title","Label Type","Qty"]);
  
    // Add data rows
    inventory.forEach(item => {
      csvRows.push([`${item.name}-${item.color}-${item.size},"Qurvii", 1 label 50mm x 25 mm on Roll - PDF,${item.quantity}`]);
    });
  
    // Create CSV content as a string
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
  
    // Create a download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'BulkGenerateBarcodeLabels.csv';  // Set the default file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);  // Clean up after download
  }
  
  // Add event listener to download button
  document.getElementById('download-csv').addEventListener('click', downloadCSV);

  // Function to auto-populate quantity as 1 when item name is entered
document.getElementById('item-name').addEventListener('input', function() {
    const itemName = this.value.trim();
    
 //   autopulate color and stylename 

 let styleCode = document.getElementById('item-name').value;

 for(let i=0;i<datas.length-1;i++){
   if(datas[i].style==styleCode ){
       console.log(datas[i]);
       if (itemName !== "") {
        document.getElementById('item-quantity').value = 1;  // Auto-populate quantity to 1
        document.getElementById('item-color').value = datas[i].color;
        
      }
      else if (itemName=="") {
        document.getElementsByClassName('size').value = "";
        
      } 
   }
 }

 if (itemName !== "") {
    document.getElementById('item-quantity').value = 1;  // Auto-populate quantity to 1
    
    
  }
  else if (itemName=="") {
    document.getElementsByClassName('size').value = "";
    
  } 
    
   
  
  });
  


  

  
  // Initial load of inventory
  loadInventory();
  