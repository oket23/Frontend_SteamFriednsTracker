type HeaderElementProps = {
    title: string;
    value: string;
};

const HeaderElement = ({ title, value }: HeaderElementProps) => {
    return (
        <p>
            <span className="text-slate-400">{title}&nbsp;</span>
            <span className="font-semibold text-slate-100">
                {value}
            </span>
        </p>
    );
};

export default HeaderElement;