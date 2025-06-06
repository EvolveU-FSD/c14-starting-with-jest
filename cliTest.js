import nameForAge from "./nameForAge.js"

if (process.argv.length < 3) {
    console.log('Usage: node cliTest <age>')
    process.exit(1)
}

const age = Number.parseFloat(process.argv[2])

const name = nameForAge(age)

console.log('Result:',age,'is',name)