function DG(dog) {
    if (dog === undefined) {
        return `I like cats!`
    //   console.log(`I like cats!`)
    } else {
        return `my favorite dog breed is ${dog}`
        // console.log(`my favorite dog breed is ${dog}`)
    }}
const pugdog = DG("pug")
const newDog = DG("golden retriever")
console.log("when it comes to pets, " + DG())
console.log("when it comes to pets, " + pugdog)
console.log("when it comes to pets, " + newDog)

