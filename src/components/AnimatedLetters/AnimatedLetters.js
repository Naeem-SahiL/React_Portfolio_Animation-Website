import './AnimatedLetters.scss';

function AnimatedLetters({ letterClass, strArray, idx }) {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={i+char} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters