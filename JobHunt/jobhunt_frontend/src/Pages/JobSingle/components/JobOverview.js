import React from 'react'
import { LineAwesome, SvgChartBar, SvgGenderlessSolid, SvgLine, SvgMarsDoubleSolid, SvgMoneyBillAlt, SvgPuzzlePieceSolid, SvgShieldAltSolid, SvgThumbtackSolid } from 'react-line-awesome-svg'
import { Jh_Overview } from '../../../components/Jh_Overview/Jh_Overview'

export const JobOverview = ({ job }) => {
    return (
        <>
            <Jh_Overview
                title="Job Overview"
                items={[
                    { icon: <LineAwesome icon={SvgMoneyBillAlt} />, title: "Offerd Salary", description: `$${job?.salary?.amount}` },
                    { icon: <LineAwesome icon={SvgMarsDoubleSolid} />, title: "Gender", description: "Female" },
                    { icon: <LineAwesome icon={SvgThumbtackSolid} />, title: "Career Level", description: "Executive" },
                    { icon: <LineAwesome icon={SvgPuzzlePieceSolid} />, title: "Industry", description: "Management" },
                    { icon: <LineAwesome icon={SvgShieldAltSolid} />, title: "Experience", description: `${job.min_work_experience} Years` },
                    { icon: <LineAwesome icon={SvgChartBar} />, title: "Qualification", description: "Bachelor Degree" },
                ]} />
        </>
    )
}
