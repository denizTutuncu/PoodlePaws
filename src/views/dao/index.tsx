import { FC } from "react"
import { Dao } from "../../components/DAO/Dao"
import styles from '../../styles/custom.module.css';
import { PublicKey } from "@solana/web3.js"

export const DAOView: FC = ({}) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          DAO 
        </h1>
        <h1 className="text-left text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Future proposals will be displayed here, but voting will happen on Realms.
        </h1>
        <div className="text-center">
          <Dao></Dao>
        </div>
        <div className="md:hero mx-auto p-5">
          <div className="md:hero-content flex flex-col">

          <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Empowering Innovation and the Pet-Loving Community
              </p>
            </h2>

          <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Poodle Paws DAO is a decentralized autonomous organization that aims to revolutionize the pet industry by creating innovative digital products and services. 
                Through the sale of unique NFTs and staking SOL tokens, the DAO plans to generate funds to drive its mission forward.
              </p>
            </h3>

            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                NFT Sales and Token Distribution Strategy
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              Poodle Paws DAO offers 55 unique NFTs for sale, priced at 175 SOL tokens each. 
              95% of the proceeds will be deposited into the DAO's treasury, while the creators receive the remaining 5%.
              You might wonder why only 55 out of 89 total NFTs are available for purchase.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              The limited number of NFTs available for purchase is due to the token distribution strategy, with 20% reserved for founders, 20% for the team, and 60% for the public sale. 
              The founders and team members will receive slightly less than the allocated 20% as they will be sharing a total of 34 NFTs.
              By following this plan, the DAO expects to generate approximately 9143 $SOL tokens.
              </p>
            </h3>

            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                NFTs and Voting Power
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              The ownership of a specific NFT confers voting power within the DAO. In the case of Poodle Paws DAO, the 89 stakeholders who hold these NFTs have the authority to propose new ideas, suggest changes to the organization, or vote on existing proposals. 
              The voting process is typically conducted on-chain through smart contracts, ensuring that it is transparent and tamper-proof.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Each NFT owner has the opportunity to voice their opinion, express their preferences, and cast their vote on proposals put forward by the community. 
                This democratic approach ensures that no single entity or group has disproportionate control over the organization's decisions. 
                Instead, voting power is distributed among all NFT holders, fostering a fair and inclusive governance model.
              </p>
            </h3>

            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Staking SOL Tokens and Monthly Returns
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                After the NFT sales, the DAO may vote on staking 9000 $SOL tokens. 
                This action is projected to generate a monthly return of 52.93603 SOL, taking into account the current inflation rate of 7.4% annually. 
                This additional income will significantly boost the DAO's treasury on a monthly basis, empowering it to create innovative products or digital content and generate further profits. 
              </p>
            </h3>
            
            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Democratic Decision-Making Process
              </p>
            </h2>
        
            <img className={styles.product_image}src='/dao.png' alt='Poodle Paws DAO'/>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                The DAO makes decisions through a democratic voting mechanism, where a 60% majority vote is required.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Ownership of NFTs effectively makes stakeholders part-owners of the DAO, giving them a direct stake in the organization's success and future. 
                As they hold NFTs, they become legitimate shareholders with the right to propose initiatives that align with the organization's mission, suggest improvements, and collectively decide on the distribution of profits.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                The democratic and transparent nature of DAOs ensures that decisions are made openly and that stakeholders have access to all relevant information. 
                This transparency builds trust and empowers shareholders to actively engage in the organization's activities, fostering a strong sense of community and shared responsibility.
             </p>
            </h3>
            
            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Vision and Mission
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Poodle Paws DAO envisions becoming the preeminent pet brand in the realm of Web3 and beyond.
               </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                The DAO plans to generate profits through various means, such as the creation of additional NFT collections or physical products. 
                These profits are then channeled back into the organization to support its mission, which includes furthering its reach as a prominent pet brand and contributing to animal welfare initiatives worldwide.
              </p>
            </h3>

            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Cutting-Edge On-Chain Booking System
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                One of the DAO's goals is to create an on-chain booking system for pet parents, 
                simplifying and enhancing the process of finding and booking pet care services using blockchain technology.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              This innovative platform will offer seamless access to reliable and trusted walkers and sitters, 
              making pet care services more accessible and efficient.
             </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-3xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                In conclusion, NFTs and DAOs form a symbiotic relationship, where NFT ownership grants stakeholders voting power and influence over the organization's governance, 
                including decisions about profits and sustainability. 
                This decentralized and democratic approach gives stakeholders a genuine sense of ownership and control, 
                empowering them to actively shape the future of the DAO and drive its success in achieving its broader mission and objectives.
              </p>
            </h3> 

            <div className="text-center">
              <Dao></Dao>
            </div>
      </div>
    </div>
      </div>
    </div>
  )
}

