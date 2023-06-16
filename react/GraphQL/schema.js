//şema içerisindeki graphql e özgü queryler, Mutationslar ve başka graphql elemanlarını nesnelerini oluşturucaz. Böylece graphql sorgularımızı ve kodlarımızı burda yazıcaz. Query ile graphqlde sorgulama yapıcaz, Mutationslar ile veri kaynağını değiştirme işlemi yapıcaz.
//yarn add graphql paketi lazım.
//GraphQLObjectType ile graphql tiplerimizi tanımlayabilicez.
//GraphQLSchema ile şema oluşturmuş olucaz serverda bu şemayı kullanıcaz.
//id isim email gibi verileri graphql string olarak belirlicez, yaş için ise graphqlint tipini kullanıcaz.
//GraphqlList ile tüm veriye getall atabiliyoruz.
//•	Json server oluşturabilmek için yarn add json-server paketi lazım.
//•	Yarn add axios paketlerine ihtiyacım var.

const axios = require("axios");
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,

} = require("graphql");

// var personeller = [
//     {id:"1",isim:"Ali",yas:30,email:"ali@google.com"},
//     {id:"2",isim:"Osman",yas:30,email:"osman@google.com"},
//     {id:"3",isim:"Esra",yas:25,email:"esra@google.com"},
//     {id:"4",isim:"Oyku",yas:2,email:"oyku@google.com"},
// ];

//ilk type imizi oluşturalım
const PersonelType = new GraphQLObjectType({
    name:"Personel",
    fields:()=>({
        id:{type:GraphQLString},
        isim:{type:GraphQLString},
        email:{type:GraphQLString},
        yas:{type:GraphQLInt}
    })
});

//birden fazla type oluşturmak isteyebiliriz. Birden fazla type oluşturmamıza rağmen graphql şema sadece 1 query ile çalışır. Bu yüzden oluşturduğumuz bütün type ve queryleri içerisinde barındıran route query oluşturmamız gerekiyor.
//queryler ile get işlemlerini mutationlar ile post pust delete işlemlerini yapıcaz
const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        personel:{
            type:PersonelType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                //veriye erişim Resolve veriye erişir. İdsi bilinen getbyid yapalım.
                // for(let i = 0; i<personeller.length;i++){
                //     if(personeller[i].id===args.id){
                //         return personeller[i];
                //     }
                // }
                return axios.get("http://localhost:3000/parsoneller/"+args.id).then(res=>res.data);
                    
            }
        },
        personeller:{
            type:new GraphQLList(PersonelType),
            resolve(parent,args){
                //getall yapalım
                return axios.get("http://localhost:3000/parsoneller").then(res=>res.data);
            }
        }
    }
});

//queryler ile get işlemlerini mutationlar ile post pust delete işlemlerini yapıcaz
const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        personelEkle:{
            type:PersonelType,
            args:{
                isim:{type:new GraphQLNonNull(GraphQLString)},
                email:{type:new GraphQLNonNull(GraphQLString)},
                yas:{type:new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parent,args){
                return axios.post("http://localhost:3000/parsoneller",{
                    isim:args.isim,
                    email:args.email,
                    yas:args.yas
                }).then(res => res.data)
            }
        },
        personelSil:{
            type:PersonelType,
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                return axios.delete("http://localhost:3000/parsoneller/"+args.id).then(res=>res.data);
            }
        },
        personelGuncelle:{
            type:PersonelType,
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)},
                isim:{type:GraphQLString},
                email:{type:GraphQLString},
                yas:{type:GraphQLInt},
            },
            resolve(_,args){
                //güncelleme yaparken patch kullanırsak sadece değiştirdiğimiz alanlar güncellenir geri kalan alanlar old data kalır
                //eğer put kullanırsak tüm alanları girmemiz lazım yoksa bir alanı girip diğerlerini girmezsek diğer old datalarda null olarak güncellenir.
                return axios.patch("http://localhost:3000/parsoneller/"+args.id, args).then(res=>res.data);
            }
        }
    }
})


//şemayı dışarıya aç
module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:mutation
})