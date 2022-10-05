const connectDB = async () => {
try {
const con = await mongoose.connect(
"mongodb+srv://nody123:Norex34Savy$@contactkeeper.5kc9ppz.mongodb.net/?retryWrites=true&w=majority",
{
useUnifiedTopology: true,
// useNewUrlParser:true,
// useCreateIndex:true
}
);
console.log("the connection is stable");
} catch (error) {
console.log(error.message);
process.exit(1);
}
};

module.exports = connectDB;
