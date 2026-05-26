class EncodeDecode {

    constructor() {
        this.encode_map =
    "\uFD3F".repeat(99) +
    "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+" +
    "QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>? \u25A1";
    }
    encode(text) {

        let encoded = "";

        for (const char of text) {

            let i = 0;
            let foundIndex = -1;

            while (i < this.encode_map.length) {

                if (this.encode_map[i] === char) {
                    foundIndex = i + 1;
                    break;
                }
                i++;
            }

            // fallback
            if (foundIndex === -1) {
                let j = 0;
				console.log("fallback");
                while (j < this.encode_map.length) {
                    if (this.encode_map[j] === "\u25A1") {
                        foundIndex = j + 1;
                        break;
                    }
                    j++;
                }
            }

            encoded += String(foundIndex);
            console.log(String(foundIndex));
            console.log(char);
        }

        return encoded;
    }

encodeLines(text) {
    return text
        .split("\n")
        .map(line => {
            if (line.trim() === "") return " ";
            return this.encode(line);
        })
        .join(" ");
}
}
