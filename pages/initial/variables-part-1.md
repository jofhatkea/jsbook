# Variables, part 1
_Variables_ are the cornerstone of programming, so let's dwell a bit here.

In a computer program we constantly need to store values for later, facebook stores your username (and WAAAAYYY more), games store your score, gold, friends etc, and all of that
is stored in what's known as variables.

A variable is like a drawer, you have a handle, you can pull it out, and you can add and remove stuff from the drawer.

In JS we declare variables using the keyword `let`

After that we define what we want our variable to be called, and finally, we can give it an initial value

`let name = "Jonas";`
## a few words about naming
In the previous example I called my variable `name`, there are a few rules when it comes to naming

These are the simplified rules

1. They start with a letter
2. After that we can have more letters and/or numbers
3. They can't contain spaces
4. Use camelCase if you put words together
    * `let firstName` is good
    * `let firstname` is allowed, but let's never use it
5. Never use dash/minus `-`
6. There's a long list of words that are reserved in JS, words we cannot use to name our variables, `let` is an example of a reserved word. It has a special meaning in the language

## More on defining variables
When we declare our variables, we can optionally give it an initial value

`let numberOfKids = 3;` is a variable with an initial value, whereas `let numberOfDivorces;` is a variable that is "undefined"

### A brief note on variable values
As you might have noticed, I used quotes when I wrote `let name = "Jonas";` and I omitted them when I wrote `let numberOfKids = 3;`

The simple explanation is that when we write pieces of text, we use quotes, and when we write numbers we don't.

In chapter TODO we'll dive in to the differences

## `var` and `const`
`var` and `const` are two other ways of declaring variables, which we'll take a look at soon enough, just know that they exist, and that most examples you'll find online will use `var`, for now, there is no difference, but you should start using `let`