/*
class EncodeDecode {

    constructor() {

        this.encode_map =
            "﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿﴿`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>? □";
    }

    // =========================
    // ENCODE (PURE LOOP SEARCH)
    // =========================
    encode(text) {

        let encoded = "";

        for (const char of text) {

            let i = 0;
            let foundIndex = -1;

            while (i < this.encode_map.length) {

                if (this.encode_map[i] === char) {
                    foundIndex = i + 1; // 1-based indexing (your rule)
                    break;
                }

                i++;
            }

            // fallback if not found
            if (foundIndex === -1) {

                let j = 0;

                while (j < this.encode_map.length) {

                    if (this.encode_map[j] === "□") {
                        foundIndex = j + 1;
                        break;
                    }

                    j++;
                }
            }

            encoded += String(foundIndex);
        }

        return encoded;
    }
    encodeLines(text) {

    const lines = text.split("\n");
    const encodedLines = [];

    for (const line of lines) {

        // reuse your existing encoder EXACTLY
        encodedLines.push(this.encode(line));
    }

    return encodedLines.join(" "); // or "\n" if you prefer display format
}
}
*/
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

                while (j < this.encode_map.length) {
                    if (this.encode_map[j] === "□") {
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
            .map(line => this.encode(line))
            .join(" ");
    }
}