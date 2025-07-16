"use client";

import { BookOpen01, Check, Copy01, Cube01, HelpCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { useClipboard } from "@/hooks/use-clipboard";

export const HomeScreen = () => {
    const clipboard = useClipboard();

    return (
        <div className="flex h-dvh flex-col">
           <p> THIS IS A PARTY</p>
        </div>
    );
};
