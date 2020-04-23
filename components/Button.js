const Button = () => (
    <div>
        <button className="btn">Sha</button>
        <style jsx>{
                `
                    .btn {
                        font-size: 14px;
                        border: 1px solid transparent;
                        background-color: blue;
                        color: white;
                        padding: 6px 12px;
                        text-align: center;
                    }
                    .btn:hover {
                        cursor: pointer;
                    }
                `
                }</style>
    </div>
);

export default Button;