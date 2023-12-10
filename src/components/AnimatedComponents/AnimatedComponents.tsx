import { ReactNode, Children } from 'react';
import { textContainer, textVariant2 } from '@/utils/animation';
import { motion } from 'framer-motion';

interface Props {
    title: string;
    className?: string;
}
export const TypingH1 = ({ title, className }: Props) => {
    return (
        <motion.h1 variants={textContainer} className={className}>
            {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
            {/* <br />
            portable magic */}
        </motion.h1>
    );
};
export const TypingH2 = ({ title, className }: Props) => {
    return (
        <motion.h2 variants={textContainer} className={className}>
            <div className="flex flex-row">
                {Array.from(title).map((letter, index) => (
                    <motion.span variants={textVariant2} key={index}>
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </div>
            {/* <br />
            portable magic */}
        </motion.h2>
    );
};

export const TypingParagraph = ({ title, className }: Props) => {
    return (
        <motion.p variants={textContainer} className={className}>
            {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.p>
    );
};

export const TypingElement = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <motion.p variants={textContainer} className={className}>
            {Children.map(children, (child, index) => {
                return (
                    <motion.span variants={textVariant2} key={index}>
                        {child}
                    </motion.span>
                );
            })}
        </motion.p>
    );
};
