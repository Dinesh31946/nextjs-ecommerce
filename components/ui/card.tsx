interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className = "", ...props }: CardProps) {
    return (
        <div
            className={`rounded-lg bg-white shadow-lg ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardContent({ children, className = "", ...props }: CardProps) {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    );
}
