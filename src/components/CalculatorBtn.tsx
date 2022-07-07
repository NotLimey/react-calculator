
interface CalculatorBtnProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}

const classNames = (...args: string[]) => args.filter(Boolean).join(' ');

const CalculatorBtn = (props: CalculatorBtnProps) => {
    return (
        <button className={classNames("hover:bg-white/50 calculator-line-h hover:shadow-md transition-all rounded-sm", props.className ?? "")}>{props.text}</button>
    );
}

export default CalculatorBtn;