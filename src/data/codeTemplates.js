const codeTemplates = {
  JavaScript: `function greet(name) {
  return "Hello " + name;
}

console.log(greet("CodeNova"));
`,

  Python: `def greet(name):
    return f"Hello {name}"

print(greet("CodeNova"))
`,

  Java: `public class Main {

    public static void main(String[] args) {

        System.out.println("Hello CodeNova");

    }

}
`,

  "C++": `#include <iostream>

using namespace std;

int main() {

    cout << "Hello CodeNova";

    return 0;

}
`,

  TypeScript: `function greet(name: string): string {
  return "Hello " + name;
}

console.log(greet("CodeNova"));
`,
};

export default codeTemplates;