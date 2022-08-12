const { readdirSync, readFileSync, writeFileSync } = require("fs")
const { join } = require("path")

const modules = join(__dirname, "../docs/api/js/modules")

for (const mod of readdirSync(modules)) {
    let processingKind = null;
    let out = [];
    for (const line of readFileSync(join(modules, mod), 'utf8').split("\n")) {
        if (line.startsWith("## Enumerations")) {
            processingKind = "enum"
            out.push(line)
            continue
        }

        if (line.startsWith("## Classes")) {
            processingKind = "class"
            out.push(line)
            continue
        }

        if (line.startsWith("## Interfaces")) {
            processingKind = "interface"
            out.push(line)
            continue
        }

        if (processingKind === "enum" && line.startsWith("- ")) {
            const [, enumPath] = /^- \[.*\]\((.*)\)/.exec(line)
            const enumContent = readFileSync(join(modules, enumPath), "utf8");
            const newContent = enumContent
                // Remove breadcrumbs
                .replace(/.*\n.*(\n# Enumeration:.*)/g, "$1")
                // Remove 2nd breadcrumbs
                .replace(/\n(# Enumeration:.*)\n\n\[.*\].*/g, "$1")
                // Remove leading redundant enumeration label
                .replace(/Enumeration: /g, "")
                .replace(/Enumeration Members/g, "Members")
                .replace(/(^|\n)#### /g, "$1###### ")
                .replace(/(^|\n)### /g, "$1##### ")
                .replace(/(^|\n)## /g, "$1#### ")
                .replace(/(^|\n)# /g, "$1### ")
                .replace(/\n\n\n+/g, "\n")

            out.push(newContent)
            continue
        }

        if (processingKind === "class" && line.startsWith("- ")) {
            const [, classPath] = /^- \[.*\]\((.*)\)/.exec(line)
            const classContent = readFileSync(join(modules, classPath), "utf8");
            const newContent = classContent
                // Remove breadcrumbs
                .replace(/.*\n.*(\n# Class:.*)/g, "$1")
                // Remove 2nd breadcrumbs
                .replace(/\n(# Class:.*)\n\n\[.*\].*/g, "$1")
                // Remove leading redundant class label
                .replace(/Class: /g, "")
                .replace(/(^|\n)#### /g, "$1###### ")
                .replace(/(^|\n)### /g, "$1##### ")
                .replace(/(^|\n)## /g, "$1#### ")
                .replace(/(^|\n)# /g, "$1### ")
                .replace(/\n\n\n+/g, "\n")

            out.push(newContent)
            continue
        }

        if (processingKind === "interface" && line.startsWith("- ")) {
            const [, interfacePath] = /^- \[.*\]\((.*)\)/.exec(line)
            const interfaceContent = readFileSync(join(modules, interfacePath), "utf8");
            const newContent = interfaceContent
                // Remove breadcrumbs
                .replace(/.*\n.*(\n# Interface:.*)/g, "$1")
                // Remove 2nd breadcrumbs
                .replace(/\n(# Interface:.*)\n\n\[.*\].*/g, "$1")
                // Remove leading redundant interface label
                .replace(/Interface: /g, "")
                .replace(/(^|\n)#### /g, "$1###### ")
                .replace(/(^|\n)### /g, "$1##### ")
                .replace(/(^|\n)## /g, "$1#### ")
                .replace(/(^|\n)# /g, "$1### ")
                .replace(/\n\n\n+/g, "\n")

            out.push(newContent)
            continue
        }

        if (processingKind && line.trim() !== "" && !line.startsWith("- ")) {
            processingKind = null
        }

        out.push(line)
    }

    const output = out.join("\n")
    // fix links
    writeFileSync(join(modules, mod), output, 'utf8')
}