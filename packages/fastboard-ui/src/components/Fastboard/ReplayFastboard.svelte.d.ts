import type { FastboardPlayer } from "@netless/fastboard-core";
import type { Theme, Language, SvelteComponentTyped } from "../../typings";

export declare interface ReplayFastboardProps {
  player?: FastboardPlayer | null;
  theme?: Theme;
  language?: Language;
  containerRef?: (container: HTMLDivElement | null) => void;
}

declare class ReplayFastboard extends SvelteComponentTyped<ReplayFastboardProps> {}
export default ReplayFastboard;
