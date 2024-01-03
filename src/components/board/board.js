import Square from "../square/square.vue";

export default {
    name: "Board",
    components: {
        Square
    },
    data: () => ({
        squares: [],
        xIsNext: false,
        winner: "",
        playervar: "",
        audio: HTMLAudioElement
    }),
    mounted() {
        this.newGame();
    },
    methods: {
        newGame() {
            this.squares = Array(9);
            this.squares.fill('');
            this.winner = "";
            this.xIsNext = true;
            this.playervar = 'X';
        },
        player() {
            return this.xIsNext ? 'X' : 'O';
        },
        makeMove(idx) {
            this.audio = new Audio("assets/sound.mp3");
            this.audio.play();
            if (!this.squares[idx]) {
                this.squares.splice(idx, 1, this.player());
                this.xIsNext = !this.xIsNext;
                this.playervar = this.xIsNext ? 'X' : 'O';
            }
            this.winner = this.calculateWinner();
        },
        calculateWinner() {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (
                    this.squares[a] &&
                    this.squares[a] === this.squares[b] &&
                    this.squares[a] === this.squares[c]
                ) {
                    return this.squares[a];
                }
            }
            return "";
        }
    }

}