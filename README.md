# Serum AMM Pool

A basic implementation of an Automated Market Maker (AMM) pool using Serum DEX on Solana.

## Features

- Create and manage liquidity pools
- Swap tokens using AMM mechanism
- Add/remove liquidity
- Price oracle integration
- Yield farming capabilities

## Prerequisites

- Node.js v14+ 
- Rust 1.55+ 
- Solana Tool Suite
- Anchor Framework

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/serum-amm-pool.git
cd serum-amm-pool
```

2. Install dependencies:
```bash
npm install
```

3. Build the program:
```bash
anchor build
```

## Usage

1. Start a local Solana validator:
```bash
solana-test-validator
```

2. Deploy the program:
```bash
anchor deploy
```

3. Run tests:
```bash
anchor test
```

## Project Structure

```
serum-amm-pool/
├── programs/
│   └── serum-amm-pool/
│       ├── src/
│       │   └── lib.rs
│       └── Cargo.toml
├── app/
│   ├── src/
│   │   └── index.ts
│   └── package.json
├── tests/
│   └── serum-amm-pool.ts
├── Anchor.toml
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Serum DEX
- Solana Foundation
- Project Serum