# ggfy-cli

`ggfy-cli` is a command-line interface tool for shortening URLs using the `ggfy` URL shortener API.

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/Aryan10/ggfy-cli.git
cd ggfy-cli
```

2. **Install dependencies**:

```bash
npm install
```

3. **Link the CLI tool**:

```bash
npm link
```

This will make the `ggfy` command available globally.

## Usage

### Shorten a URL

To shorten a URL, use the following command:

```bash
ggfy <url>
```

Replace `<url>` with the URL you want to shorten. For example:

```bash
ggfy http://example.com
```

The CLI tool will output the shortened URL.