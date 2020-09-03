import React from 'react';
import { ComponentProps } from '..';
interface TagProps extends ComponentProps {
    text: string;
}
declare const Tag: React.FC<TagProps>;
export { Tag };
