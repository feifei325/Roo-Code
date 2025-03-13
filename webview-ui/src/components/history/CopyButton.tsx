import { useCallback } from "react"
import { useAppTranslation } from "@/i18n/TranslationContext"

import { useClipboard } from "@/components/ui/hooks"
import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"

type CopyButtonProps = {
	itemTask: string
}

export const CopyButton = ({ itemTask }: CopyButtonProps) => {
	const { t } = useAppTranslation()
	const { isCopied, copy } = useClipboard()

	const onCopy = useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation()
			!isCopied && copy(itemTask)
		},
		[isCopied, copy, itemTask],
	)

	return (
		<Button
			variant="ghost"
			size="icon"
			title={t("history:copyPrompt")}
			onClick={onCopy}
			className="opacity-50 hover:opacity-100">
			<span className={cn("codicon scale-80", { "codicon-check": isCopied, "codicon-copy": !isCopied })} />
		</Button>
	)
}
