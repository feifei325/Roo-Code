import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { useAppTranslation } from "@/i18n/TranslationContext"
import { memo } from "react"

interface AnnouncementProps {
	version: string
	hideAnnouncement: () => void
}
/*
You must update the latestAnnouncementId in ClineProvider for new announcements to show to users. This new id will be compared with whats in state for the 'last announcement shown', and if it's different then the announcement will render. As soon as an announcement is shown, the id will be updated in state. This ensures that announcements are not shown more than once, even if the user doesn't close it themselves.
*/
const Announcement = ({ version, hideAnnouncement }: AnnouncementProps) => {
	const { t } = useAppTranslation()
	return (
		<div
			style={{
				backgroundColor: "var(--vscode-editor-inactiveSelectionBackground)",
				borderRadius: "3px",
				padding: "12px 16px",
				margin: "5px 15px 5px 15px",
				position: "relative",
				flexShrink: 0,
			}}>
			<VSCodeButton
				appearance="icon"
				onClick={hideAnnouncement}
				title={t("announcement:hideAnnouncement")}
				style={{ position: "absolute", top: "8px", right: "8px" }}>
				<span className="codicon codicon-close"></span>
			</VSCodeButton>
			<h2 style={{ margin: "0 0 8px" }}>{t("announcement:rooCodeReleased")}</h2>

			<p style={{ margin: "5px 0px" }}>{t("announcement:rooCodeDescription")}</p>

			<h3 style={{ margin: "12px 0 8px" }}>{t("announcement:whatsNew")}</h3>
			<div style={{ margin: "5px 0px" }}>
				<ul style={{ margin: "4px 0 6px 20px", padding: 0 }}>
					<li>{t("announcement:fasterCheckpoints")}</li>
					<li>{t("announcement:rooignoreSupport")}</li>
					<li>{t("announcement:fixedIssues")}</li>
					<li>{t("announcement:multiWindow")}</li>
					<li>{t("announcement:multiDiff")}</li>
					<li>{t("announcement:subtaskCommunication")}</li>
					<li>{t("announcement:updatedDeepSeek")}</li>
					<li>{t("announcement:newHumanRelay")}</li>
				</ul>
			</div>

			<p style={{ margin: "10px 0px 0px" }}>
				{t("announcement:getMoreDetails")}{" "}
				<VSCodeLink
					href="https://discord.gg/roocode"
					onClick={(e) => {
						e.preventDefault()
						window.postMessage(
							{ type: "action", action: "openExternal", data: { url: "https://discord.gg/roocode" } },
							"*",
						)
					}}>
					{t("announcement:discord")}
				</VSCodeLink>{" "}
				and{" "}
				<VSCodeLink
					href="https://reddit.com/r/RooCode"
					onClick={(e) => {
						e.preventDefault()
						window.postMessage(
							{ type: "action", action: "openExternal", data: { url: "https://reddit.com/r/RooCode" } },
							"*",
						)
					}}>
					{t("announcement:reddit")}
				</VSCodeLink>{" "}
				{t("announcement:rocket")}
			</p>
		</div>
	)
}

export default memo(Announcement)
