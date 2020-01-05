/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as icons from './svg'; // svg/index.ts에서 내보내고 있는 모든 아이콘을 `icons`라는 하나의 객체로 호출

type IconType = keyof typeof icons; // `keyof typeof icons` : `icons` 객체가 가지고 있는 `key`를 추출하여 타입으로 사용 -> `exit | heart | pencil`
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

export type IconProps = {
    /** 사용할 아이콘 타입 */
    icon: IconType;
    /** 아이콘 색상 */
    color?: string;
    /** 아이콘 크기 */
    size?: string | number;
    /** 스타일 커스터마이징 하고 싶을 때 사용 */
    className?: string
}

const Icon = ({icon, color, size, className}: IconProps) => {
    const SVGIcon = icons[icon];
    return (
        <SVGIcon
            css={{fill: color || 'currentColor', width: size, height: 'auto'}}
        />
    )
};

export default Icon;